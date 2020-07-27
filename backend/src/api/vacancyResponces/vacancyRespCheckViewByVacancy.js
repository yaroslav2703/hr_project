const Vacancy = require('../../database/models/vacancy')
const VacancyResp = require('../../database/models/vacancyResponce');

module.exports = async (req, res) => {
    try{

        const {_id} = req.body

        const vacancy = await Vacancy.find({_id});

        const vacanciesResp = await VacancyResp.find({vacancy, viewed: false});

        if (vacanciesResp.length === 0) {
            res.status(201).json({message: 'Непросмотренных вакансий нет', col: vacanciesResp.length})
        }
        else {
            res.status(201).json({message: 'Непросмотренные вакансии есть', col: vacanciesResp.length})
        }
    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
