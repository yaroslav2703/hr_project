const Staff = require('../../database/models/staff');

module.exports = async (req, res) => {
    try{

        const employees = await Staff.find();

        res.status(201).json({message: 'Выбраны все работники', employees: employees})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
