# E-Commerce Back-End

## Description

This is the back-end for an e-commerce solution.  As an internet retail company we want a state of the art back-end for our website in order to compete with other internet retail companies. We are building this e-commerce back-end consisting of a MySQL database accessed through Sequelize using Express and Node.js to serve the front-end of out web site.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Copy down the entire repository (https://github.com/melliott7264/e-commerce-back-end) to a local folder and run "npm install".   All the dependencies will be installed.  You will have to log into the MySQL shell as root to create the new ecommerce_db database by running "source ./db/schema.sql".  You may also want to grant privileges on the new database and tables to another user while you are there.   Make sure the credentials for that user are in the .env file to be used by the server on startup to connect to the database.  When you run "npm start" to start the server, Sequelizer will create the tables. 

## Usage

Run "npm start" from the command line in the root of your application folder to start the server.   This will make the database available to your front end on the api routes.  You can use Insomnia to test these routes; /api/categories, /api/tags, /api/products.   There are routes for GET all, GET one on the id, POST, PUT on the id, and DELETE on the id.

YouTube Walk-through Part 1 (Setup and Gets):  https://youtu.be/CLabwVElYWo
YouTube Walk-through Part 2 (POSTs, PUTs): https://youtu.be/OcLE8XM3YHg
YouTube Walk-through Part 3 (PUT and DELETEs):


## Credits

Mark Elliott  https://github.com/melliott7264



## License

Copyright (c) 2022 Mark Elliott

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

