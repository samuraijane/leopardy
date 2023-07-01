require('dotenv').config()

const cookieParser = require('cookie-parser')
const pgp = require('pg-promise')()
const cors = require('cors')
const bcrypt = require('bcrypt')
const express = require('express')
const server = express()

const PORT = 8080

const db = pgp(process.env.URL)

server.use(cors())
server.use(express.json())
server.use(cookieParser())

server.get('/heartbeat', (req, res) => {
  res.json({ message: 'heartbeat' })
})

server.get('/users', async (req, res) => {
  try {
    const users = await db.manyOrNone('SELECT * FROM users')
    res.json(users)
  } catch (error) {
    console.error('Error retrieving users:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

server.post('/signup', async (req, res) => {
  const { id, email, first_name, last_name, username, avatar_url, password } =
    req.body

  try {
    // Check if the user already exists
    const existingUser = await db.oneOrNone(
      'SELECT * FROM users WHERE username = $1',
      username
    )
    if (existingUser) {
      return res.status(409).json({ error: 'Username already exists' })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create the user in the database
    await db.none(
      'INSERT INTO users(id, email, first_name, last_name, username, avatar_url, password) VALUES($1, $2, $3, $4, $5, $6, $7)',
      [id, email, first_name, last_name, username, avatar_url, hashedPassword]
    )

    res.json({ message: 'User created successfully' })
  } catch (error) {
    console.error('Error creating user:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

server.post('/signin', async (req, res) => {
  const { username, password } = req.body

  try {
    // Retrieve the user from the database
    const user = await db.oneOrNone(
      'SELECT * FROM users WHERE username = $1',
      username
    )
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' })
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' })
    }

    res.json({ message: 'Sign-in successful' })
  } catch (error) {
    console.error('Error signing in:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// ...

// Insert sample data into categories and questions
server.post('/sampledata', async (req, res) => {
  try {
    // Insert sample categories
    const categories = [
      {
        title: 'Cat1',
        questions: [
          { difficulty: 100, question: 'q1', answer: 'a1' },
          { difficulty: 200, question: 'q2', answer: 'a2' },
          { difficulty: 300, question: 'q3', answer: 'a3' },
          { difficulty: 400, question: 'q4', answer: 'a4' },
          { difficulty: 500, question: 'q5', answer: 'a5' },
        ],
      },
      // Add more sample categories here if needed
    ];

    for (const category of categories) {
      // Insert the category
      await db.none('INSERT INTO categories (title) VALUES ($1)', [category.title]);

      // Insert the questions for the category
      const categoryId = await db.one('SELECT id FROM categories WHERE title = $1', [category.title]);

      for (const question of category.questions) {
        await db.none(
          'INSERT INTO questions (category_id, difficulty, question, answer) VALUES ($1, $2, $3, $4)',
          [categoryId.id, question.difficulty, question.question, question.answer]
        );
      }
    }

    res.json({ message: 'Sample data inserted successfully' });
  } catch (error) {
    console.error('Error inserting sample data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all categories with their questions
server.get('/categories', async (req, res) => {
  try {
    const categories = await db.any(`
      SELECT c.title AS category_title, q.difficulty, q.question, q.answer
      FROM categories AS c
      INNER JOIN questions AS q ON c.id = q.category_id
      ORDER BY c.title, q.difficulty
    `);

    // Structure the data by categories
    const formattedCategories = [];
    let currentCategory = null;

    for (const category of categories) {
      if (category.category_title !== currentCategory) {
        formattedCategories.push({ title: category.category_title, questions: [] });
        currentCategory = category.category_title;
      }

      const formattedQuestion = {
        difficulty: category.difficulty,
        question: category.question,
        answer: category.answer,
      };

      formattedCategories[formattedCategories.length - 1].questions.push(formattedQuestion);
    }

    res.json(formattedCategories);
  } catch (error) {
    console.error('Error retrieving categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ...


server.listen(PORT, () => {
  console.log(`This server is running at PORT ${PORT}`)
})
