const mongoose = require('mongoose');


//schemas
const adminSchema = new mongoose.Schema({
    username:String,
    password:String
});

const menuSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number
});

// models 

const Admin = mongoose.model('Admin',adminSchema);
const Menu = mongoose.model('Menu',menuSchema);

module.exports ={
Admin,
Menu
}