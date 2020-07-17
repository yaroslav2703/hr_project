const Vacancy = require('../../database/models/vacancy');

module.exports = async (req, res) => {
    try{
        const {_id} = req.body;

        const vacancy = await Vacancy.findOne({_id});

        res.status(201).json({message: 'Вакансия выбрана', vacancy: vacancy})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};


