USE movie-db;

CREATE TABLE `Movies` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`title` varchar(255) DEFAULT NULL,
`year` int(11) DEFAULT NULL,
`user` int(255) DEFAULT NULL,
`public` boolean DEFAULT true,
 PRIMARY KEY (`id`)
);

CREATE TABLE `Users` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`firstname` varchar(255) DEFAULT NULL,
`lastname` varchar(255) DEFAULT NULL,
`username` varchar(255) DEFAULT NULL,
`password` varchar(255) DEFAULT NULL,
 PRIMARY KEY (`id`)
);

INSERT INTO `Users` (firstname,lastname,username,password) values ("Max","Mustermann","MM","8436ca57461542199cc185ab5c0982ca");
INSERT INTO `Users` (firstname,lastname,username,password) values ("Maxine","Mustermann","MM2","8436ca57461542199cc185ab5c0982ca");

