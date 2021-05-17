const db = require('./db');

const _getAll = (req, res) => {
    
        var myQuery = "select * from tblFaq";
    
        db.getDataSet(myQuery)
         .then((data) =>{
             res.status(200).send(data);
         },(err)=> {
            res.status(200).send(err);
         });
}

const _getById = (req, res) => {
    var myQuery = "select * from tblFaq where id = " + req.params.id;
    
    db.getDataSet(myQuery)
     .then((data) =>{
         res.status(200).send(data);
     },(err)=> {
        res.status(200).send(err);
     });

}

const insertfaq  = (req, res) => {
    
        const faq = req.body;
        var myQuery = `insert into tblFaq(faq, answer) 
        values('${faq.faq}','${faq.answer}')`;
    
        db.InsertOrUpdate(myQuery)
            .then((data) =>{
                res.status(200).send('Record added successfully.');
            })
            .catch((err) =>{
                res.status(501).setDefaultEncoding(err);
            });
    
}

const _updatefaq= (req, res) => {
    
        const faq = req.body;
        var myQuery = `update tblFaq set faq = '${faq.faq}', answer = '${faq.answer}' where id = ${faq.id}  `; 
        
        db.InsertOrUpdate(myQuery)
        .then((data) =>{
            res.status(200).send('Record update successfully');
        })
        .catch((err) =>{
            res.status(501).send(err);
        })
        
    
}

const _deletefaq = (req, res) => {
    var myQuery = "delete from tblFaq where id = " + req.params.id;
    console.log(myQuery)
    db.ExecuteDeleteQuery(myQuery)
    .then((data) =>{
         console.log(data)
         res.status(200).send("Record deleted successfully.");
        },(err)=> {
         console.log(err)
        res.status(200).send(err);
     });

}

module.exports = {
    getAll: _getAll,
    getById: _getById,
    insert: insertfaq,
    update: _updatefaq,
    delete: _deletefaq
}