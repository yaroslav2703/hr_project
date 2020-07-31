const Staff = require('../../database/models/staff');
const fs = require('fs')

module.exports = async (req, res) => {
    try{

        const {_id} = req.body;

        const candidate = await Staff.findOne({_id})

        if(candidate.photo != 'noImage') {
            await fs.unlink('uploads/' + candidate.photo, (err) => {
                if (err) console.log(err)
            })
        }

        if (candidate.documents != []) {
            candidate.documents.forEach(el => {
                fs.unlinkSync('uploads/' + el.systemName, (err) => {
                    if (err) console.log(err)
                })
            })
        }

        await Staff.deleteOne({_id});

        res.status(200).json({message: 'Сотрудник удален'})

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};
