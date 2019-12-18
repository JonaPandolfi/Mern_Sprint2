const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const usuarioModel = require('./usuarioModel.js').default;
const key= require('./secretKey');

//router.post('../client/login', function(req, res){
    
    //const userName= req.body.userName;
    //usuarioModel.findOne({userName:userName}).then(user=>({
        //if(!user){
            //res.send({message:'userName no existe'});
        //}
        //if(user.password === req.body.password){
            //const payload = {
                //id: user._id,
               // userName: user.userName,
            //}
            //const options={
                //expireIn: '2592000',
            //}
            //jwt.sign(
                //payload,
                //key.secretOrKey,
                //options,
                //(err,token)=>(
                    //if(err){
                       // res.json({
                           // success: false,
                          //  token: 'There was an error',
                        //})
                   // }else{
                       // res.json({
                           // success: true,
                           // token : token,
                       // })
                    //}
                //)

            //)
       // }else{
            //res.send({
                //message:'password incorrecto',
            //})
       // }
  //  })
    //.catch(err=>{
       // return.send(err);
   //- })


