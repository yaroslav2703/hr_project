const Staff = require('../../database/models/staff');

module.exports = async (req, res) => {
    try{

        const staff = await Staff.find();

        res.status(201).json({message: 'Выбраны все сотрудники', staff: staff})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
