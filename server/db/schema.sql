CREATE TYPE role AS ENUM ('employee', 'boss');

CREATE TABLE users (
    id serial primary key,
    username varchar(20) not null unique,
    name varchar(128) not null,
    email varchar(128) unique,
    password varchar(128),
    user_role role
);

CREATE TABLE reports (
    id serial primary key,
    user_id int not null references users (id), 
    created_at timestamptz not null default now(),
    this_week text,
    next_week text,
    comments text
);

CREATE index reports_username_index on reports(user_id);
CREATE index reports_created_at_index on reports(created_at);
