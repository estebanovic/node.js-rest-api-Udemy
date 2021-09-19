const db = require("../config/db.config")

exports.register = (data, callback) => {
    db.query(
        `INSERT INTO users (firstName, lastName, emailId, password) VAlues (?,?,?,?)`,
        [data.firstName, data.lastName, data.emailId, data.password],
        (error, results, fields) => {
            if(error){
                return callback(error);
            }
            return callback(null, `Registrarion successful`)
        }
    )
}