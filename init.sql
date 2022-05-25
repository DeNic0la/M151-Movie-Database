CREATE DATABASE `movie-db`;
USE `movie-db`;
CREATE TABLE `Movies` (`id` int(11) NOT NULL AUTO_INCREMENT,
`title` varchar(255) DEFAULT NULL,
`year` int(11) DEFAULT NULL,
`user` varchar(255) DEFAULT NULL,
`public` boolean DEFAULT true,
 PRIMARY KEY (`id`)
)

CREATE TABLE `User` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`firstname` varchar(255) DEFAULT NULL,
`lastname` varchar(255) DEFAULT NULL,
`username` varchar(255) DEFAULT NULL,
`password` varchar(255) DEFAULT NULL,
 PRIMARY KEY (`id`)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;
