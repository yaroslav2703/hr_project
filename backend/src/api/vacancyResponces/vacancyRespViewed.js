const VacancyResp = require('../../database/models/vacancyResponce');

module.exports = async (req, res) => {
    try{

        const {_id} = req.body;

        let vacancyResp =  await VacancyResp.findOne({_id});
        vacancyResp.viewed = true;

        await vacancyResp.save();

        res.status(201).json({message: 'Отклик помечен как просмотренный'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};