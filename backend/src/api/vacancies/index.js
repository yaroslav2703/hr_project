module.exports = (app) => {


    app.get('/vacancy/get', require('./vacanciesGet'));

    app.post('/vacancy/get-one', require('./vacanciesGetOne'));

    app.post('/vacancy/updateResponse', require('./vacanciesUpdateResponse'));

    app.post('/vacancy/updateResponseCol', require('./vacanciesUpdateResponseCol'));

    app.post('/vacancy/filter', require('./vacanciesFilter'));

    app.post('/vacancy/add', require('./vacanciesAdd'));

    app.delete('/vacancy/delete', require('./vacanciesDelete'));
    
    app.put('/vacancy/update', require('./vacanciesUpdate'));

};