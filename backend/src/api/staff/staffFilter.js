const Staff = require('../../database/models/staff');

module.exports = async (req, res) => {
    try{
        const {fullNameRus, position, internalPosition, email} = req.body;

        const find_obj = {};
        if (fullNameRus != null) {
            find_obj['fullNameRus'] = fullNameRus
        }
        if (position != null) {
            find_obj['position'] = position
        }
        if (internalPosition != null) {
            find_obj['internalPosition'] = internalPosition
        }
        if (email != null) {
            find_obj['email'] = email
        }

        const staff = await Staff.find(find_obj);

        res.status(201).json({message: 'Список отфильтрован', staff: staff})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
