var mongoose = require( "mongoose" ); 

var userSema=new mongoose.Schema({
    ad: {type: String, required: true},
    soyad: {type: String, required: true},
    eposta: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
});

mongoose.model("user", userSema,"users");