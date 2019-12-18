const express = require('express');
const router = express.Router();
const passport= require('passport');

require('.(')


router.get('/auth/google/callback',

  passport.authenticate('google', {failureRedirect: 'http://localhost:5000/', session : false});
    function(res,req){

      res.redirect('http://localhost:5000/home')
    }



)



module.export = router;