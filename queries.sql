CREATE DATABASE fargowiz;

CREATE TABLE users (
    UID varchar(255) NOT NULL UNIQUE PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    PhoneNumber BIGINT(10) NOT NULL UNIQUE,
    Email varchar(255) not null UNIQUE
);

-- CREATE TABLE `epiz_32008682_fargowiz`.`fargowiz` ( `UID` VARCHAR(255) NOT NULL UNIQUE, `Name` VARCHAR(255) NOT NULL, `PhoneNumber` BIGINT(10) NOT NULL UNIQUE, `Email` VARCHAR(255) NOT NULL UNIQUE, PRIMARY KEY (`UID`(255))) ENGINE = MyISAM;