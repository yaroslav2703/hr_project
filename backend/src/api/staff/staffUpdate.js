const Staff = require('../../database/models/staff');
const fs = require('fs')

module.exports = async (req, res) => {
    try{

        const {_id} = req.body;

        const candidate = await Staff.findOne({_id});

        if (candidate) {

            if(candidate.photo != 'noImage') {
                await fs.unlink('uploads/' + candidate.photo, (err) => {
                    if (err) console.log(err)
                })
            }

            if (req.files[0]) {
                req.body.photo = req.files[0].filename
            } else {
                req.body.photo = 'noImage'
            }

            delete req.body._id

            await Staff.findByIdAndUpdate(_id, req.body)

            res.status(200).json({message: 'Работник обновлен!'})
        }

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};