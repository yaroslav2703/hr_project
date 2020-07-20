const Users = require('../../database/models/user');

module.exports = async (req, res) => {
    try{

        const {_id} = req.body;

        const user = await Users.findOne({_id});

        res.status(201).json({message: 'Пользователь выбран', user: user})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};