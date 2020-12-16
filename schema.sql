-- Drops the movie_planner_db if it already exists --
DROP DATABASE IF EXISTS ten_questions_db;

-- Create the database movie_planner_db and specified it for use.
CREATE DATABASE ten_questions_db;

USE ten_questions_db;

-- Create the table plans.
CREATE TABLE answers (
  id int NOT NULL AUTO_INCREMENT,
  answers varchar(255) NOT NULL,
  PRIMARY KEY (id)
);
