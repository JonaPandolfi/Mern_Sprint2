const express = require('express');
const itineraryModel = require('../models/itineraryModel');
const router = express.Router();

router.post('/', (req, res) => {
  const itinerario = new itineraryModel({
      title: req.body.title,
      city: req.body.city,
      summary: req.body.summary,
      duration: req.body.duration,
      price: req.body.price,
      rating: req.body.rating,
      country: req.body.country,
      img:req.body.img
  });
  itinerario.save()
    .then(itinerary => {
    res.send({message: " its succesfull",itinerary})
    })
    .catch(err => {
    res.status(500).send("Server error")}) 
});

// router.get('/all',
//     (req, res) => {
//         itineraryModel.find()
//             .then(files => {
//                 res.send(files)
//             })
//             .catch(err => console.log(err));

//             //err => console.log(err)
//             //err => res.send({ msg: {err} })
//     });



    module.exports = router;

    