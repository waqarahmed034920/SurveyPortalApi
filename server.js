const express = require('express');
const path = require('path');
const userApi= require('./api/userApi');
const faqApi= require('./api/faqApi');
const questionApi= require('./api/questionApi');
const surveyApi= require('./api/surveyApi');

var app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('/)'));

app.use('/api/user', userApi);
app.use('/api/faq', faqApi);
app.use('/api/question', questionApi);
app.use('/api/survey', surveyApi);

app.get('/', function (req, res) {
    const file = path.resolve(__dirname, 'index.html');
    res.status(200).sendFile(file);
});


app.listen(port);

console.log('Plase goto http://localhost:' + port + ' to access this app');
console.log('Survey portal is listening on port :', port);
