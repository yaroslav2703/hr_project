module.exports = (app) => {
    app.get('/vacancy/get', require('./vacanciesGet'));

    app.post('/vacancy/add', require('./vacanciesAdd'));

    app.delete('/vacancy/delete', require('./vacanciesDelete'));
    
    app.put('/vacancy/update', require('./vacanciesUpdate'));

};