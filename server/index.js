const express = require('express');
require('dotenv').config();
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const port = process.env.PORT || 3001;

const exampleApi = require('./routes/example');

// DATABASE
// let knex = require('knex')({
//     //Client options  pg, sqlite3, mysql, mysql2, oracledb, mssql
//     client: 'mssql',
//     connection: {
//       host : process.env.DV_HOST,
//       user : process.env.DB_USER,
//       password : process.env.DB_PASS,
//       database : process.env.DB_SCHEMA
//     }
//   });

// API / SQL Controllers / SERVICES

// Express

const app = express();

app.use(helmet());
app.use(bodyparser.json());
app.use(morgan('tiny'));

// Routes
app.use('/example', exampleApi);
app.get('/', (req, res) => res.send('Hello world'));

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
