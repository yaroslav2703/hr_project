const Vacancy = require('../../database/models/vacancy')
const VacancyResp = require('../../database/models/vacancyResponce');

module.exports = async (req, res) => {
    try{

        const {_id} = req.body
    
        const vacancy = await Vacancy.find({_id});

        const vacanciesResp = await VacancyResp.find({vacancy});

        res.status(201).json({message: 'Выбраны все вакансии', vacanciesResp: vacanciesResp})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
