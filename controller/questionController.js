const db = require('./db');

const _insertquestion = (req, res) => {
    const question = req.body;
    var myQuery = `declare @qid int;
        insert into tblQuestions(SurveyId, Question) values('${question.surveyId}', '${question.question}' );
        select @qid = scope_identity();`;
    question.options.forEach(o => {
        myQuery += `insert into tblOptions(QuestionId,Text,Type) values(@qid,'${o.text}','${o.type}');`;
    });

    db.InsertOrUpdate(myQuery)
        .then((data) => {
            res.status(200).send('Record added successfully.');
        })
        .catch((err) => {
            res.status(501).send(err);
        });

}


module.exports = {
    insert: _insertquestion
}