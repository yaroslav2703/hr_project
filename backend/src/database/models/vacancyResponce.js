const database = require('mongoose');
const Schema = database.Schema;

const VacancySchemaResponce = new Schema(
    {
        sex: { type: String, required: true },
        age: { type: String, required: true },
        skill: { type: String, required: true },
        badExperience: { type: String, required: true },
        psychChar: { type: String, required: true },
<<<<<<< HEAD
    },
    { timestamps: true },
=======
    }
>>>>>>> origin/master
)

module.exports = database.model('VacancyResponce', VacancySchemaResponce);