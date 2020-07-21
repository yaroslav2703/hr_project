const VacancyResponce = require('../../database/models/vacancyResponce');

module.exports = async (req, res) => {
    try{

        const {_id} = req.body;

        await VacancyResponce.deleteOne({_id});

        res.status(200).json({message: 'Отклик удален'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};