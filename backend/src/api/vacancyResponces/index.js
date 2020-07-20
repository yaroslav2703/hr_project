module.exports = (app) => {

    app.get('/vacancyResp/get', require('./vacancyRespGet'));

    app.post('/vacancyResp/getbyid', require('./vacancyRespById'));
    
};