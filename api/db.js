const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'user1',
  password: 'password1',
  host: 'db_postgres',
  port: '5432',
  database: 'practice',
});

module.exports = pool;
