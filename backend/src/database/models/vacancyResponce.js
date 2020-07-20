const database = require('mongoose');
const Schema = database.Schema;

const VacancySchemaResponce = new Schema(
    {
        sex: { type: String, required: false },
        age: { type: String, required: false },
        skill: { type: String, required: false },
        badExperience: { type: String, required: false },
        psychChar: { type: String, required: false },
        vacancy: { type: Schema.Types.ObjectId, ref: 'Vacancy'},
        user: { type: Schema.Types.ObjectId, ref: 'User'}
    },
    { timestamps: true },
)

module.exports = database.model('VacancyResponce', VacancySchemaResponce);