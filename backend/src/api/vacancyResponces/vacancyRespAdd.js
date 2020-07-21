const VacancyResponce = require('../../database/models/vacancyResponce');

module.exports = async (req, res) => {
    
    try{

        const {fullName, email, phoneNumber, sex, age, skill, badExperience, psychChar, vacancy} = req.body;

        let vacanceResp = new VacancyResponce({fullName, email, phoneNumber, sex, age, skill, badExperience, psychChar, vacancy});


        await vacanceResp.save();

        res.status(201).json({message: 'Отклик отправлен'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};