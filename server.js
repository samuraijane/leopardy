require('dotenv').config();

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

server.get('/heartbeat', (req, res) => {
  res.json({ message: 'heartbeat' });
});

server.get('/api/avatars', async (req, res) => {
  const userInput = req.body;
  const img = await fetch(`https://robohash.org/${userInput}?set=set3`);
  res.json(img);
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

    res.json({ message: 'Sign-in successful' });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

server.get('/categories', async (req, res) => {
  try {
    const categories = await db.any('SELECT * FROM categories');
    res.json(categories);
  } catch (error) {
    console.error('Error retrieving categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

server.post('/categories', async (req, res) => {
  const { title } = req.body;

  try {
    const category = await db.one(
      'INSERT INTO categories (title) VALUES ($1) RETURNING *',
      title
    );
    res.json(category);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

server.get('/questions', async (req, res) => {
  try {
    const questions = await db.any('SELECT * FROM questions');
    res.json(questions);
  } catch (error) {
    console.error('Error retrieving questions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

server.post('/questions', async (req, res) => {
  const { category_id, difficulty, question, answer } = req.body;

  try {
    await db.none(
      'INSERT INTO questions (category_id, difficulty, question, answer) VALUES ($1, $2, $3, $4)',
      [category_id, difficulty, question, answer]
    );
    res.json({ message: 'Question created successfully' });
  } catch (error) {
    console.error('Error creating question:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


server.get('/games', async (req, res) => {
  try {
    const games = await db.any('SELECT * FROM games');
    res.json(games);
  } catch (error) {
    console.error('Error retrieving games:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


server.listen(PORT, async () => {
  console.log(`This server is running at PORT ${PORT}`);
});
