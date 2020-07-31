const database = require('mongoose');
const Schema = database.Schema;

const StaffSchema = new Schema(
    {
        photo: { type: String, required: false },
        fullNameRus: { type: String, required: false },
        fullNameEng: { type: String, required: false },
        birthDate: { type: String, required: false },
        address: { type: String, required: false },
        position: { type: String, required: false },
        internalPosition: { type: String, required: false },
        familyContacts: { type: String, required: false },
        extTelephone: { type: String, required: false },
        telephone: { type: String, required: false },
        email: { type: String, required: false },
        skype: { type: String, required: false },
        department: { type: String, required: false },
        subordination: { type: String, required: false },
        hireDate: { type: String, required: false },
        probation: { type: String, required: false },
        documents: [
            {
                    originalName: { type: String, required: false},
                    systemName: { type: String, required: false}
            }
        ]
    },
    { timestamps: true },
)

module.exports = database.model('Staff', StaffSchema);