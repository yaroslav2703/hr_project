const Staff = require('../../database/models/staff');

module.exports = async (req, res) => {
    
    try{

        const {photo, fullNameRus, fullNameEng, birthDate, address, position, internalPosition, familyContacts, extTelephone, telephone,
            email, skype, department, subordination, hireDate, probation} = req.body;

        let staff = new Staff({photo, fullNameRus, fullNameEng, birthDate, address, position, internalPosition, familyContacts, extTelephone, telephone,
            email, skype, department, subordination, hireDate, probation});


        await staff.save();

        res.status(201).json({message: 'Работник добавлен'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};