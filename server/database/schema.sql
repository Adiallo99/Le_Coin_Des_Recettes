-- Active: 1727035875920@@127.0.0.1@3306@recipes

create Table users(
  id int PRIMARY KEY Auto_increment NOT NULL,
  pseudo VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(250) NOT NULL
);

CREATE Table categories(
 id int PRIMARY KEY Auto_increment NOT NULL,
 name VARCHAR(50) NOT NULL
);


CREATE Table recipes(
 id int PRIMARY KEY Auto_increment NOT NULL,
 name VARCHAR(50) NOT NULL,
 preparation_time TIME NOT NULL,
 ingredients VARCHAR(250) NOT NULL,
 instruction VARCHAR(250) not NULL,
 pictures VARCHAR(250) DEFAULT NULL,
 pictures_second VARCHAR(250) DEFAULT NULL,
 users_id INT NOT NULL,
 categories_id INT NOT NULL,
 FOREIGN KEY (users_id) REFERENCES users(id),
 FOREIGN KEY (categories_id) REFERENCES categories(id)
);

CREATE Table pictures(
 id int PRIMARY KEY Auto_increment NOT NULL,
 name VARCHAR(50) NOT NULL,
 recipies_id int NOT NULL,
 Foreign Key (recipies_id) REFERENCES recipes(id)
);

INSERT INTO categories(name) VALUES ("Entrée"), ("Repas"), ("Dessert");

SELECT * FROM users;