const VacancyResp = require('../../database/models/vacancyResponce');

module.exports = async (req, res) => {
    try{

        const {_id} = req.body
    
        const vacancyResp = await VacancyResp.findOne({_id});

        res.status(201).json({message: 'Выбран отклик', vacancyResp: vacancyResp})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
