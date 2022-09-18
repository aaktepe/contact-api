# Contact Api

## Overview

This is a simple JSON-based REST API developed for the user to access, add, delete and search their contacts., built with Node, Express, and Sequelize.

### Install

You need to execute `npm install` command in terminal

### Environments
When connecting to the database, Sequelize will use the 'development' environment by default, unless it detects an environment variable telling it otherwise. This is defined in db/models/index.js, where the connection to the database is made:

	var env = process.env.NODE_ENV || 'development';

This allows us to easily switch between connecting with a test database running on localhost, and a production database.

You need to change **config.json** to access the database.

## Routes / Endpoints
The following routes are set up, and will return JSON data:

#### Auth
+ **POST** sign up a new user: /api/auth/signup
+ **POST** sign in: /api/auth/signin

#### Contact (needs jwt to reach all endpoints)
+ **GET** all contacts of the current user: /api/contacts
+ **GET** search and get contacts of the current user: /api/contacts?{key=value}<br />
(i.e. firstName=testFirstName&lastName=testLastName)
+ **GET** single contact by id of the current user: /api/contacts/{id}
+ **POST** new contact of the current user: /api/contacts
+ **PUT** edit a single contact of the current user: /api/contacts/{id}
+ **DELETE** a single contact of the current user: /api/contacts/{id}

### Migrations and Seeders
All migrations and seeders will be executed automatically when the system is up. There is no need to do anything.

### Test Users

+ username: Test Abdurrahman, password: P@ssword123!
+ username: Test Abdurrahman2, password: P@ssword123!

### Test Contacts

+ firstName: Abdurrahman, lastname: Aktepe, company:Mobilist, phone:+905076426118/19, uid:1
+ firstName: Abdurrahman, lastname: Aktepe2, company:Mobilist, phone:+905076426120/21, uid:1
+ firstName: Abdurrahman, lastname: Aktepe3, company:Mobilist, phone:+905076426122/23, uid:2
+ firstName: Abdurrahman, lastname: Aktepe4, company:Mobilist, phone:+905076426124/25, uid:2