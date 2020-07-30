const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const upload = require('express-fileupload')
const bodyParser = require('body-parser');
const databaseMiddleware = require('../database/databaseInit')

app.use(upload())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(databaseMiddleware);
app.use(bodyParser.json());


const routes = express.Router();
require('./auth')(routes);
require('./vacancies')(routes);
require('./users')(routes)
require('./staff')(routes);
require('./vacancyResponces')(routes);
app.use('/api', routes);

const frontendDir = path.join(
    __dirname,
    "../../../frontend/dist",
);

if (fs.existsSync(frontendDir)){
    app.use('/', express.static(frontendDir));

    app.get('*', function(request, response) {
        response.sendFile(
            path.resolve(frontendDir, 'index.html'),
        );
    });
}

module.exports = app;