const os = require('os');

module.exports = {
    env: 'localhost',

    database: {
        connection: 'mongodb+srv://Admin:LXU5sdiREFNSirV2@cluster0.weoox.mongodb.net/hr_db',
        transactions: false,
    },

    graphiql: true,

    clientUrl: 'http://localhost:8081',

    defaultUser: 'yaroslav.pitsukha@gmail.com',

    uploadDir: os.tmpdir(),

    authJwtSecret: '406e4987-e9a3-4281-8373-b14ca10e6886',

};