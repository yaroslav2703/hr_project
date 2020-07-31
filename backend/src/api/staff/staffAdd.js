const Staff = require('../../database/models/staff');
const fs = require('fs')

module.exports = async (req, res, next) => {
    
    try{

        const {photo, fullNameRus, fullNameEng, birthDate, address, position, internalPosition, familyContacts, extTelephone, telephone,
            email, skype, department, subordination, hireDate, probation} = req.body;

        let documents = []

        let staff = new Staff({photo, fullNameRus, fullNameEng, birthDate, address, position, internalPosition, familyContacts, extTelephone, telephone,
            email, skype, department, subordination, hireDate, probation, documents});

        
        if(req.files != null) {
        
            if (req.files.photo) {
                const file = req.files.photo
                file.mv("./uploads/" + file.md5, (err) => {
                    if (err) console.log(err)
                })
                staff.photo = file.md5
            }
            
            if (req.files.documents) {
                if (Array.isArray(req.files.documents)) {

                    req.files.documents.forEach(el => {
                        staff.documents.push({originalName: el.name, systemName: el.md5})
                        el.mv("./uploads/" + el.md5, (err) => {
                            if (err) console.log(err)
                        })
                    })

                } else {

                    const doc = req.files.documents
                    doc.mv("./uploads/" + doc.md5, (err) => {
                        if (err) console.log(err)
                    })
                    staff.documents.push({originalName: doc.name, systemName: doc.md5})
                }

            }
        } else {
            staff.photo = 'noImage'
        }

        await staff.save();

        res.status(201).json({message: 'Работник добавлен'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};