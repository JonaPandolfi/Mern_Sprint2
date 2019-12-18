const passport = require('passport');
const GoogleStrategy = require('passport-google-oaut20').Strategy;
const usuarioModel = require('../models/userModel');



passport.use(new GoogleStrategy({
  clientID:"280969277885-heh08abvuafbehevqnr0fo8gi8r502ob.apps.googleusercontent.com",
  ClientSecret:"nILaI7bQ90LVnFzu1BtG3tIq",
  CallbackURL:"http://localhost:5000/api/Auth/google/callback",


},

function(accessToken, refreshToken, profile, cb){

  console.log(profile);
  cb(null, profile);

}





))