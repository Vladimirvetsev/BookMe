var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    firstname: String,
    secondname: String,
    username: {type: String, unique:true},
    password: {type: String},
    country: String,
    birthDate: {type: Date},
    title: String,
    gender:  String,
    phonenumber:  String,
    email: {type: String, unique:true},
    addres: String,
    addres: String,
    hotels:[null]
});

var User = mongoose.model('myuser', userSchema);

module.exports=User;