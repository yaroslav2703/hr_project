module.exports = (app) => {

    app.get('/vacancyResp/get', require('./vacancyRespGet'));

    app.post('/vacancyResp/getbyid', require('./vacancyRespByIdVacancy'));

    app.post('/vacancyResp/add', require('./vacancyRespAdd.js'));

    app.post('/vacancyResp/getrespbyid', require('./vacancyRespById'));

    app.delete('/vacancyResp/delete', require('./vacancyRespDelete'))
    
};