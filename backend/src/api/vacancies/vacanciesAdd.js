const Vacancy = require('../../database/models/vacancy');

module.exports = async (req, res) => {
    try{

        const {title, type, department, searchReason, subordination, company, responsibility, exitToWork, highEducation,
            requiredSkill, wageProbation, wage, wageKPI, wageAdditional, workingConditions} = req.body;

        const candidate = await Vacancy.findOne({title});

        if (candidate) {
            return res.status(400).json({ message: 'Вакансия с таким названием уже присутсвует!'})
        }

        let vacancy = new Vacancy({title, type, department, searchReason, subordination, company, responsibility, exitToWork, highEducation,
            requiredSkill, wageProbation, wage, wageKPI, wageAdditional, workingConditions});


        await vacancy.save();

        res.status(201).json({message: 'Вакансия добавлена'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};