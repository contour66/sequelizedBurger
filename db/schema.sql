CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE `burgers` (
	`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`burger_name` varchar (225) NOT NULL	,
	`devoured` boolean,
	`date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);

-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
-- date: a TIMESTAMP.