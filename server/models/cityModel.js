
// esto es del sprint 2 para completar en el proyecto principal

const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: 
    { 
        type:String,
        
        required: true,
        unique: true,
    },
     country:  
    {
        type :String,

        required : true,
    },
    img:
    {
        type:String,

    }

});

module.exports = mongoose.model('city', citySchema);
