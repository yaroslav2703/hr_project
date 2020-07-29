const Staff = require('../../database/models/staff');
const fs = require('fs')

module.exports = async (req, res) => {
    try{

        const {_id} = req.body;

        const employee = await Staff.findOne({_id});

        img = await fs.readFile('uploads/' + employee.photo, (err, data) => {
            if (err) {
                console.log(err)
            }
            if (data) {
                res.writeHead(200, {'Content-Type': 'image/*'});
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