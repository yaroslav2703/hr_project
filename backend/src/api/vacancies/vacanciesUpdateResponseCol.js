const Vacancy = require('../../database/models/vacancy');

module.exports = async (req, res) => {
    try{
        const {_id, col} = req.body;

        const vacancy = await Vacancy.findOne({_id});

        if (vacancy) {
            vacancy.col = col;

            await vacancy.save();

            res.status(200).json({message: 'Вакансия обновлена!'})
        }

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
