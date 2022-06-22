CREATE DATABASE fargowiz;

CREATE TABLE users (
    UID varchar(255) NOT NULL UNIQUE PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    PhoneNumber BIGINT(10) NOT NULL UNIQUE,
    Email varchar(255) not null UNIQUE
);
