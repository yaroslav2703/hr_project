const Vacancy = require('../../database/models/vacancy');

module.exports = async (req, res) => {
    try{

        const {_id} = req.body;

        const candidate = await Vacancy.findOne({_id});

        if (candidate) {

            delete req.body._id

            await Vacancy.findByIdAndUpdate(_id, req.body)

            res.status(200).json({message: 'Вакансия обновлена!'})
        }

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};