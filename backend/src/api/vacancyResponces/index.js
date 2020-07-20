module.exports = (app) => {

    app.get('/vacancyResp/get', require('./vacancyRespGet'));

    app.post('/vacancyResp/getbyid', require('./vacancyRespById'));

    app.post('/vacancyResp/add', require('./vacancyRespAdd.js'));
    
};