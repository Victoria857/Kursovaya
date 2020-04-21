CREATE TABLE users
(
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    login VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(150)
);