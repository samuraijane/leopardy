require('dotenv').config();
const path = require('path');

const cookieParser = require('cookie-parser');
const pgp = require('pg-promise')();
const cors = require('cors');
const bcrypt = require('bcrypt');
const express = require('express');
const server = express();

const PORT = 8080;

const db = pgp(process.env.URL);

server.use(cors());
server.use(express.json());
server.use(cookieParser());
server.use(express.static(path.resolve(`${__dirname}/react-ui/build`)));

server.get('/heartbeat', (req, res) => {
  res.json({ message: 'heartbeat' });
});

server.get('api/avatars', async (req, res) => {
    const userInput = req.body;
    const img = await fetch(`https://robohash.org/${userInput}?set=set3`);
    res.json(img);
})

server.get('/users', async (req, res) => {
  try {
    const users = await db.manyOrNone('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

server.post('/signup', async (req, res) => {
  const { id, email, first_name, last_name, username, avatar_url, password } =
    req.body;

  try {
    // Check if the user already exists
    const existingUser = await db.oneOrNone(
      'SELECT * FROM users WHERE username = $1',
      username
    );
    if (existingUser) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    await db.none(
      'INSERT INTO users(id, email, first_name, last_name, username, avatar_url, password) VALUES($1, $2, $3, $4, $5, $6, $7)',
      [id, email, first_name, last_name, username, avatar_url, hashedPassword]
    );

    res.json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

server.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Retrieve the user from the database
    const user = await db.oneOrNone(
      'SELECT * FROM users WHERE username = $1',
      username
    );
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    res.json({message:"heartbeat"})

server.get('*', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/react-ui/build/index.html`));
  });
  

    res.json({ message: 'Sign-in successful' });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
server.get('*', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/react-ui/build/index.html`));
  });


server.listen(PORT, () => {
  console.log(`This server is running at PORT ${PORT}`);
});
