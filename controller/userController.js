const db = require('./db');

const _getAll = (req, res) => {

}

const _getById = (req, res) => {

}

const _insertUser = (req, res) => {

    const user = req.body;
    var password = user.password;

    var myQuery = `insert into tbluser(id, username, password) 
    values(${user.userName}, ${password})`;

    db.InsertOrUpdate(myQuery)
        .then((data) => {
            res.status(200).send('Record added successfully.');
        }, (err) => {
            res.status(501).send(err);
        });
}

const _updateUser = (req, res) => {

}

const _deleteUser = (req, res) => {

}

module.exports = {
    getAll: _getAll,
    getById: _getById,
    insert: _insertUser,
    update: _updateUser,
    delete: _deleteUser
}