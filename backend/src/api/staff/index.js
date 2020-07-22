module.exports = (app) => {
    app.get('/staff/get', require('./staffGet'));

    app.post('/staff/get-one', require('./staffGetOne'));

    app.post('/staff/filter', require('./staffFilter'));

    app.post('/staff/add', require('./staffAdd'));

    app.delete('/staff/delete', require('./staffDelete'));
    
    app.put('/staff/update', require('./staffUpdate'));

};