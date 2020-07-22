const Staff = require('../../database/models/staff');

module.exports = async (req, res) => {
    try{

        const {_id} = req.body;

        await Staff.deleteOne({_id});

        res.status(200).json({message: 'Сотрудник удален'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
