const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: String,
    password : String,
    email: String,
    profilePic:String,
    firstName: String,
    lastName: String,
    country: String
}
)

module.exports = Model('User', userSchema);