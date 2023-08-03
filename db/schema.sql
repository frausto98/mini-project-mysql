DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movie_names (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL
--   movie_rating INT NOT NULL
);

CREATE TABLE movie_reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  review TEXT NOT NULL
  movie_id INT NOT NULL
  FOREIGN KEY (movie_id)
  REFERENCES movie_names(id)
  ON DELETE SET NULL
);
