require('dotenv').config();

const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const pgp = require('pg-promise')();
const cors = require('cors');
const bcrypt = require('bcrypt');
const express = require('express');

const server = express();

const PORT = 8080;

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'leopardy',
  user: 'postgres',
  password: process.env.PASSWORD, 
});

server.use(cors());
server.use(express.json());
server.use(cookieParser());

server.get('/heartbeat', (req, res) => {
  res.json({ message: 'heartbeat' });
});

server.get('/users', async (req, res) => {
  try {
    const users = await db.manyOrNone('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


server.listen(PORT, () => console.log(`This server is running at PORT ${PORT}`));
