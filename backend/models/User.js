var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    typeOfUser: String,
    imageId: String,
    updated_date: {type: Date, default: Date.now},
});


const User = mongoose.model('UserCollection',UserSchema);

module.exports = User ;
