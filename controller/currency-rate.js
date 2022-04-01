const connection = require('../lib/database')
module.exports = function(app){
    app.get('/getBitcoinInfo', (req, res) => {
        connection.query('SELECT * FROM `currency` WHERE name=?',['btc'], function(error, results) {
            if (results.length > 0) {
                return res.json([{
                    message: 'For BTC',
                    data: results
                }])
            }else{
                return res.json([{
                    message: 'No BTC database',
                }])
            }
        
        })
    })
    app.get('/currency_list', (req, res) => {
        connection.query('SELECT * FROM `currency`', function(error, results) {
            if (results.length > 0) {
                return res.json([{
                    message: 'For currency list',
                    data: results
                }])
            }else{
                return res.json([{
                    message: 'No currency database',
                }])
            }
        
        })
    })
    app.get('/currency', (req, res) => {
        var currency = req.query.currency;
        connection.query('SELECT * FROM `currency` WHERE name=?',[currency], function(error, results) {
            if (results.length > 0) {
                return res.json([{
                    message: 'For BTC',
                    data: results
                }])
            }else{
                return res.json([{
                    message: 'No BTC database',
                }])
            }
        
        })
    })
}