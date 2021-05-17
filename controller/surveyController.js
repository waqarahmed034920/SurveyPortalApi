const db = require('./db');

const _getAll = (req, res) => {

    var myQuery = "select * from tblSurvey";
    db.getDataSet(myQuery)
        .then((data) => {
            res.status(200).send(data);
        }, (err) => {
            res.status(200).send(err);
        });

}

const _insertsurvey = (req, res) => {

    const survey = req.body;
    var myQuery = `insert into tblsurvey(name, description, startDate, endDate, surveyFor) 
        values('${survey.name}', '${survey.description}', '${survey.startDate}', '${survey.endDate}', '${survey.surveyFor}')`;
    db.InsertOrUpdate(myQuery)
        .then((data) => {
            res.status(200).send('Record added successfully.');
        }, (err) => {
            res.status(501).send(err);
        });



}


module.exports = {
    getAll: _getAll,
    insert: _insertsurvey
}