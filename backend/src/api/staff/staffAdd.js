const Staff = require('../../database/models/staff');
const fs = require('fs')

module.exports = async (req, res, next) => {
    
    try{

        console.log(req.files)

        const {photo, fullNameRus, fullNameEng, birthDate, address, position, internalPosition, familyContacts, extTelephone, telephone,
            email, skype, department, subordination, hireDate, probation} = req.body;

        let staff = new Staff({photo, fullNameRus, fullNameEng, birthDate, address, position, internalPosition, familyContacts, extTelephone, telephone,
            email, skype, department, subordination, hireDate, probation});

        
        if (req.files.photo) {
            const file = req.files.photo
            file.mv("./uploads/" + req.files.photo.md5, (err) => {
                if (err) console.log(err)
            })
            staff.photo = file.md5
        } else {
            staff.photo = 'noImage'
        }
        

        await staff.save();

        res.status(201).json({message: 'Работник добавлен'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};