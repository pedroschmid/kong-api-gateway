const { Pool } = require('pg')

const pool = new Pool({
  database: 'konga',
  host: 'postgres',
  user: 'kong',
  password: 'kong',
  port: 5432,
})

module.exports = { pool }