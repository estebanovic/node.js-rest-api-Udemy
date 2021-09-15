const { createPool}  = require("mysql")

const db = createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "node_js_rest_api_udemy",
    connectionLimit: 10
})

module.exports = db;