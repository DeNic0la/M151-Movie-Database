DROP TABLE IF EXISTS `Movies`;
CREATE TABLE `Movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `year` varchar(45) DEFAULT NULL,
  `user` int DEFAULT NULL,
  `public` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `Movies` WRITE;
INSERT INTO `Movies` VALUES (7,'Harry Potter 1','2001',1,1),(8,'Harry Potter 2','2002',1,NULL),(9,'Herr der Ringe 1','2005',2,1),(10,'Herr der Ringe 2','2006',2,NULL),(12,'Wow very movie','1230',1,1);
UNLOCK TABLES;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

LOCK TABLES `Users` WRITE;
INSERT INTO `Users` VALUES (1,'Markus','Ineichen','ineichen','8436ca57461542199cc185ab5c0982ca'),(2,'Fabian','Mueller','muellefa','8436ca57461542199cc185ab5c0982ca');
UNLOCK TABLES;

CREATE TABLE `Ratings` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`user` int(11) DEFAULT NULL,
`movie` int(11) DEFAULT NULL,
`rating` int(11) DEFAULT NULL,
 PRIMARY KEY (`id`),
 FOREIGN KEY (user) REFERENCES Users(id),
 FOREIGN KEY (movie) REFERENCES Movies(id),
 CONSTRAINT `rating_one` CHECK ((`rating` <= 1)),
 CONSTRAINT `rating_five` CHECK ((`rating` >= 5)),
);