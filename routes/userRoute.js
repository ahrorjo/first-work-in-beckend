// userRoute.js
const express = require("express");

const {
    createUser,
    getUser,
    deleteUser,
    updateUser
} = require('../controller/user');

const users = express.Router();

users.get('/getUsers', getUser)

users.post('/createUser', createUser)

users.delete('/deleteUser/:_id', deleteUser)

users.put('/updateUser/:_id', updateUser)

module.exports = users;