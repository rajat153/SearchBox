const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const data = require('./Data')


const app = express()

app.use(cors())
app.use(express.urlencoded({limit:"30mb",extended:true}))

app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1>")
})

app.get('/ads',(req,res)=>{
    console.log("dew")
    res.send(data)
})

app.get('/ads/q',(req,res)=>{
    console.log({name:req.query.name})
    console.log("ddddddd")
    

    // const data1 = data.find((d) => d.primaryText.toLowerCase() === req.query)
    // console.log(data1)
    // res.send(data1)

})

app.listen('7000',()=>{
    console.log("Server is running on port no. 7000 ")
})