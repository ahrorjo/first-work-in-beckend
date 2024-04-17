// userSchema.js
const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    userName: { type: String, require: true },
    password: {type: String, require: true},
    fullName: {type: String, require: true},
    phone: {type: Number, require: true},
    address: {type: String},
    dateOfBirth: {type: String},
},
    { timestamps: true }
)

const userModel = model("user", userSchema);
module.exports = userModel;

const uzb = 50;

console.log("50" + uzb);