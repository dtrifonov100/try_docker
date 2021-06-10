const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
//
// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 2: Passing parameters separately (other dialects)
const POSTGRES_USER = process.env.POSTGRES_USER || 'postgres';
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || '123456';
const POSTGRES_DB = process.env.POSTGRES_DB || 'try_dock';
const PGHOST = process.env.POSTGRES_HOST || 'db';

const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
  host: PGHOST,
  dialect: 'postgres',
  port: 5432
});
// const sequelize = new Sequelize(`postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${PGHOST}:5432/${POSTGRES_DB}`);
module.exports = {sequelize}
