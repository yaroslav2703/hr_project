const Staff = require('../../database/models/staff');

module.exports = async (req, res) => {
    try{

        const {_id} = req.body;

        const employee = await Staff.findOne({_id});

        res.status(201).json({message: 'Сотрудник выбран', employee: employee})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};