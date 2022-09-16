const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// const data = require('./Data')
const Ads = require("./model/search");

mongoose.connect('mongodb://localhost:27017/adsData', { useNewUrlParser: true })
    .then(() => {
        console.log("Mongo Connectiom Open!!!!!")

    })
    .catch(err => {
        console.log("Oh No mongo connection error!!!!")
        console.log(err)
    })


const app = express()

app.use(cors())
app.use(express.urlencoded({limit:"30mb",extended:true}))

app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1>")
})

app.get('/ads',async(req,res)=>{
    const ads = await Ads.find()
    console.log(ads)
    res.send(ads)
})

app.listen('7000',()=>{
    console.log("Server is running on port no. 7000 ")
})
