const mongoose = require('mongoose');
const Ads = require("./model/search");

mongoose.connect('mongodb://localhost:27017/adsData', { useNewUrlParser: true })
    .then(() => {
        console.log("Mongo Connectiom Open!!!!!")

    })
    .catch(err => {
        console.log("Oh No mongo connection error!!!!")
        console.log(err)
    })



const ads = [
  {
    _id: 1,
    companyId: 3,
    primaryText:
      "The world’s leading CRM is ready to help you simplify the business part of your small business.",
    headline: "Salesforce for Small Business",
    description: "",
  },
  { _id: 2, companyId: 1, primaryText: "We like where you’re going with this.", headline: "Relaxed Fit Men's Jeans", description: "" },
  {
    _id: 3,
    companyId: 6,
    primaryText:
      "Teva x Cotopaxi is back! Celebrate eternal summer with limited-edition Teva x Cotopaxi Original Universal sandals in bold new colors.",
    headline: "Made With Recycled Plastic",
    description: "Shop Back to School",
  },
];


Ads.insertMany(ads)  //this method used for saving multiple datas
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
// module.exports =  ads
