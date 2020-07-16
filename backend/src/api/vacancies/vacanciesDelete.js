const Vacancy = require('../../database/models/vacancy');

module.exports = async (req, res) => {
    try{

        const {_id} = req.body;

        await Vacancy.deleteOne({_id});

        res.status(200).json({message: 'Вакансия удалена'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
