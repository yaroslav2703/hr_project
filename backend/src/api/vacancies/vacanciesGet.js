const Vacancy = require('../../database/models/vacancy');

module.exports = async (req, res) => {
    try{

        const vacancies = await Vacancy.find();

        res.status(201).json({message: 'Выбраны все вакансии', vacancies: vacancies})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
