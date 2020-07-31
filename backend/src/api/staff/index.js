module.exports = (app) => {
    app.get('/staff/get', require('./staffGet'));

    app.post('/staff/get-one', require('./staffGetOne'));

    app.post('/staff/filter', require('./staffFilter'));

    app.post('/staff/add', require('./staffAdd'));

    app.post('/staff/get-one-file', require('./staffGetOneFile'))

    app.delete('/staff/delete', require('./staffDelete'));
    
    app.post('/staff/update', require('./staffUpdate'));

    app.post('/staff/doc-download', require('./staffGetDoc'))

};