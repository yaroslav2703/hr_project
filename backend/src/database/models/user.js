const database = require('mongoose');
const Schema = database.Schema;

const UserSchema = new Schema(
    {
        firstName: { type: String, maxlength: 80 },
        lastName: { type: String, maxlength: 175 },
        phoneNumber: { type: String, maxlength: 24},
        email: { type: String, maxlength: 255, required: true, unique: true },
        password: { type: String, maxlength: 255, required: true },
        disabled: { type: Boolean, default: false },
        role: { type: String, required: true },
        responces: [{ type: Schema.Types.ObjectId, ref: 'VacancyResponce'}],
        createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
        updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true },
);


module.exports = database.model('User', UserSchema);
