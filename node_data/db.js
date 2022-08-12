const Pool = require('pg').Pool
const pool = new Pool({
    user: "alex",
    password: "qwerty",
    host: "postgres",
    port: "5432",
    database: "practice",
})

module.exports = pool
