const database = require('mongoose');
const Schema = database.Schema;

const StaffSchema = new Schema(
    {
        photo: { type: String, required: true },
        fullNameRus: { type: String, required: true },
        fullNameEng: { type: String, required: true },
        birthDate: { type: Date, required: true },
        address: { type: String, required: true },
        position: { type: String, required: true },
        familyContacts: { type: String, required: true },
        extTelephone: { type: String, required: true },
        telephone: { type: String, required: true },
        email: { type: String, required: true },
        skype: { type: String, required: true },
        department: { type: String, required: true },
        subordination: { type: String, required: true },
        hireDate: { type: Date, required: true },
        probation: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = database.model('Staff', StaffSchema);