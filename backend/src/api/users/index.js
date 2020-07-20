module.exports = (app) => {
    app.get('/users/get', require('./usersGet'));

    app.post('/users/get-one', require('./usersGetOne'));

};