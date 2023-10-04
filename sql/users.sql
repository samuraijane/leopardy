SELECT 'CREATE DATABASE leopardy' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'leopardy')\gexec

\c leopardy

CREATE TABLE users (
    id INT PRIMARY KEY,
    email TEXT,
    first_name TEXT,
    last_name TEXT,
    username VARCHAR(50),
    avatar_url VARCHAR(300), 
    password TEXT
);

INSERT INTO users (id, email, first_name, last_name, username, avatar_url, password)
VALUES (1, 'henry@gmail.com', 'Henry', 'Martinez', 'Henry123', 'https://api.dicebear.com/6.x/adventurer/svg?flip=false', 'hello1234');


SELECT * FROM users;

