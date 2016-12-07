CREATE DATABASE employeeRegistry;
USE employeeRegistry;

CREATE TABLE employees(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	PRIMARY KEY(id),
	first_name VARCHAR(100),
	last_name VARCHAR(100),
	age INTEGER(3),
	enjoys VARCHAR(120)
);

INSERT INTO employees (first_name, last_name, age, enjoys) VALUES ('Rubber', 'Duck', '2', 'Helping debug code');
INSERT INTO employees (first_name, last_name, age, enjoys) VALUES ('Jim', 'McCoy', '36', 'Innapropriate Language');
INSERT INTO employees (first_name, last_name, age, enjoys) VALUES ('John', 'Flores', '25', 'Dank Memes');
INSERT INTO employees (first_name, last_name, age, enjoys) VALUES ('Cher', 'Shedd', '23', 'Being a Badass');