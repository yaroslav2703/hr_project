module.exports = (app) => {

    app.get('/vacancyResp/get', require('./vacancyRespGet'));

    app.post('/vacancyResp/viewed', require('./vacancyRespViewed'));

    app.post('/vacancyResp/getbyid', require('./vacancyRespByIdVacancy'));

    app.post('/vacancyResp/add', require('./vacancyRespAdd'));

    app.post('/vacancyResp/getrespbyid', require('./vacancyRespById'));

    app.post('/vacancyResp/checkviewbyvacancy', require('./vacancyRespCheckViewByVacancy'));

    app.delete('/vacancyResp/delete', require('./vacancyRespDelete'))
    
};