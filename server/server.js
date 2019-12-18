const express = require("express");
const cors = require('cors');
//const passport = require('passport');

const mongoose = require("mongoose");
const db = require('./keys').mongoURI;
const bodyParser = require("body-parser");


//app.use('/api',)



const app = express();


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors());

app.use('/cities', require('./routes/cities'));
app.use('/itineraries', require('./routes/itineraries'));
app.use('/load', require('./routes/load'));

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));

 const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});