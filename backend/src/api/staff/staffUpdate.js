const Staff = require('../../database/models/staff');

module.exports = async (req, res) => {
    try{

        const {_id} = req.body;

        const candidate = await Staff.findOne({_id});

        if (candidate) {

            delete req.body._id

            await Staff.findByIdAndUpdate(_id, req.body)

            res.status(200).json({message: 'Работник обновлен!'})
        }

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};