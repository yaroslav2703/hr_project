const database = require('mongoose');
const Schema = database.Schema;

const VacancySchema = new Schema(
    {
        title: { type: String, required: true },
        type: { type: String, required: true, enum: ['Открытая', 'Срочная', 'Закрытая', 'Текущая' ,'Резервная']},
        department: { type: String, required: false },
        searchReason: { type: String, required: false },
        subordination: { type: String, required: false },
        company: { type: String, required: false },
        responsibility: { type: String, required: false },
        exitToWork: { type: String, required: false },
        //sex: { type: String, required: true },
        //age: { type: String, required: true },
        highEducation: { type: String, required: true, enum: ['Обязательное', 'Желательное', 'Не важно']},
        //skill: { type: String, required: true },
        requiredSkill: { type: String, required: false },
        //badExperience: { type: String, required: true },
        //psychChar: { type: String, required: true },
        wageProbation: { type: String, required: false },
        wage: { type: String, required: false },
        wageKPI: { type: String, required: false },
        wageAdditional: { type: String, required: false },
        workingConditions: { type: String, required: false },
        isHide: { type: Boolean, default: false, required: true },
        col: { type: String, default: '0', required: false }
    },
    { timestamps: true },
);


module.exports = database.model('Vacancy', VacancySchema);