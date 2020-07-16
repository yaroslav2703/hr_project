module.exports = (app) => {
    app.get('/staff/get', require('./staffGet'));

    app.post('/staff/add', require('./staffAdd'));

    app.delete('/staff/delete', require('./staffDelete'));
    
    app.put('/staff/update', require('./staffUpdate'));

};