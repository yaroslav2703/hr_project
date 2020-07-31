const Vacancy = require('../../database/models/vacancy');

module.exports = async (req, res) => {
    try{
        const {title, company, isHide, type} = req.body;

        const find_obj = {};
        if (title != null) {
            find_obj['title'] = title
        }
        if (company != null) {
            find_obj['company'] = company
        }
        if (isHide != null) {
            find_obj['isHide'] = isHide === 'true';
        }
        if (type !== null) {
            find_obj['type'] = type
        }

        const vacancy = await Vacancy.find(find_obj);

        res.status(201).json({message: 'Список отфильтрован', vacancy: vacancy})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
