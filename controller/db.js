const sql = require('mssql');

var config = {
    server: 'DESKTOP-33EJ8JI',
    database: 'SPortal',
    user: 'sa',
    password: '1234',
    options: {
        encrypt: false
    }
}

module.exports = {

    // delete
    ExecuteDeleteQuery: (query) => {
        return new Promise((resolve, reject) => {
            sql.connect(config).then(pool => {
                return pool.request().query(query);
            }).then(result => {
                sql.close();
                resolve(result);
            }).catch(err => {
                sql.close();
                reject(err);
            });    
        });
    },

    // insert or update
    InsertOrUpdate: (query) => {
        return new Promise((resolve, reject) => {
            sql.connect(config).then(pool => {
                return pool.request().query(query);
            }).then(result => {
                sql.close();
                resolve('Success');
            }).catch(err => {
                sql.close();
                reject(err);
            });
        });
    },

    // select 
    getDataSet: (query) => {
        return new Promise((resolve, reject) => {
            sql.connect(config).then(pool => {
                return pool.request().query(query);
            }).then(result => {
                sql.close();
                resolve(result.recordset);
            }).catch(err => {
                sql.close();
                reject(err);
            });
        })
    }
}
