-- Run this in PgAdmin to setup database 

CREATE DATABASE posts_app;

CREATE TABLE posts(
    post_id SERIAL PRIMARY KEY,
    post_body VARCHAR(255)
);