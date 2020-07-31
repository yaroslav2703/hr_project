const Staff = require('../../database/models/staff');
const fs = require('fs')

module.exports = async (req, res) => {
    try{

        const {docId} = req.body;

        await fs.readFile('uploads/' + docId, (err, data) => {
            if (err) {
                console.log(err)
            }
            if (data) {
                res.end(Buffer.from(data).toString('base64'));
            }
            else {
                res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
            }
        })

    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
};