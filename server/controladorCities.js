const express = require('express');
const router = express.Router();
const cityModel = require('./models/cityModel.js').default;
const key= require('./secretKey');


router.get('../client/cities', function(req, res){