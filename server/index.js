const express = require('express');
const app = express();

const dotenv = require('dotenv')
dotenv.config({path: './config/.env'})

const connectDatabase = require('./config/db')
connectDatabase()

const port = process.env.PORT

require("./config/db");

const userRoute = require("./routes/user");

app.use(express.json())  //parsed of json object
app.use(express.urlencoded({extended:true})) //parsed the form data

app.use('/api/v1/', userRoute)   //http://localhost:4000/api/v1/users

app.listen(port, (err)=>{
    if(!err)
    console.log(`server running on port ${port}`)
})