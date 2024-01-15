const {test} = require('../controller/authController')

module.exports = function(app){
    app.get("/",test)
}