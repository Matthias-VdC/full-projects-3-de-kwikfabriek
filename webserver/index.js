//CRUD setup van Miguel

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8100;
const cors = require('cors');

const {
    Database
} = require('./CRUD/database.js');


const {
    User
} = require('./CRUD/user.js');

const {
    UserDB
} = require('./CRUD/UserDB.js');


app.use(bodyParser.json());
app.use(cors());

let host = "db";
let username = "username";
let password = "username";
let database = "BioLab";


//Create connection
function createConnection() {
    let BioLabDB = new Database()
    BioLabDB.maakVerbindingMetDatabase(host, username, password, database);
}

//Get all users
function getAllUsers() {
    let Users = new UserDB()
    Users.getAll();
}

//Get one user based on userID
function getOneUser(){
    let Student = new UserDB()
    Student.getUserFromUserID("1");
}

createConnection();
// getAllUsers();
// getOneUser();