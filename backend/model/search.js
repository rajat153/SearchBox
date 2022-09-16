const mongoose = require('mongoose');

const AdsSchema = new mongoose.Schema({
    primaryTeaxt: {
        type: String, 
    },

    _id:{
        type:Number

    },
    
    companyId: {
        type: Number,
        
    },
    
    headline: {
        type: String, 
    },
    description: {
        type: String, 
    },
    
})

const Ads = mongoose.model('Ads', AdsSchema);

module.exports = Ads;
