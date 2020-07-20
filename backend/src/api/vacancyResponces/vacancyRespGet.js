const VacancyResp = require('../../database/models/vacancyResponce');

module.exports = async (req, res) => {
    try{

        const vacanciesResp = await VacancyResp.find();

        res.status(201).json({message: 'Выбраны все вакансии', vacanciesResp: vacanciesResp})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
