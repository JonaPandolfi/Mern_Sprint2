const express = require('express');
const cityModel = require('../models/cityModel');
const router = express.Router();


router.post('/', (req, res) => {
    const ciudad = new cityModel({
        name: req.body.name,
        country: req.body.country,
        img:req.body.img
    })
    ciudad.save()
      .then(city => {
      res.send({message: " its succesfull",city})
      })
      .catch(err => {
      res.status(500).send("Server error")}) 
});





router.get('/all',
    (req, res) => {
        cityModel.find()
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));

            //err => console.log(err)
            //err => res.send({ msg: {err} })
    });

router.get('/test', (req, res) => {

    res.send({ msg: 'Cities test route.' })

})
module.exports = router;