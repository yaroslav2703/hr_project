const Staff = require('../../database/models/staff');
const fs = require('fs')

module.exports = async (req, res) => {
    try{

        const {_id} = req.body;

        const candidate = await Staff.findOne({_id});

        if (candidate) {

            let documents = candidate.documents

            if(req.files != null) {

                if (req.files.photo) {
                    if(candidate.photo != 'noImage') {
                        await fs.unlink('uploads/' + candidate.photo, (err) => {
                            if (err) console.log(err)
                        })
                    }
                }

                if (req.files.photo) {
                    const file = req.files.photo
                    file.mv("uploads/" + file.md5, (err) => {
                        if (err) console.log(err)
                    })
                    req.body.photo = file.md5
                } else {
                    req.body.photo = candidate.photo
                }

                if (req.files.documents) {

                    if (Array.isArray(req.files.documents)) {

                        req.files.documents.forEach(el => {
                            documents.push({originalName: el.name, systemName: el.md5})
                            el.mv("./uploads/" + el.md5, (err) => {
                                if (err) console.log(err)
                            })
                        })
        
                    } else {
        
                        const doc = req.files.documents
                        doc.mv("./uploads/" + doc.md5, (err) => {
                            if (err) console.log(err)
                        })
                        documents.push({originalName: doc.name, systemName: doc.md5})
                    }
                }

            } else {
                req.body.photo = candidate.photo
            }

            let newDocs = []  

            if (req.body.deleteDocuments) {

                documents.forEach(el => {
                    if (!req.body.deleteDocuments.includes(el.systemName)) {
                        newDocs.push(el)
                    }
                })

                if (Array.isArray(req.body.deleteDocuments)) {
                    
                    req.body.deleteDocuments.forEach(el => {
                        fs.unlinkSync('uploads/' + el, (err) => {
                            if (err) console.log(err)
                        })  
                    })

                } else {
                    fs.unlinkSync('uploads/' + req.body.deleteDocuments, (err) => {
                        if (err) console.log(err)
                    })
                }
            }

            if(newDocs.length == 0) {
                req.body.documents = documents
            } else {
                req.body.documents = newDocs
            }

            delete req.body._id

            await Staff.findByIdAndUpdate(_id, req.body)

            res.status(200).json({message: 'Работник обновлен!'})
        }

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};