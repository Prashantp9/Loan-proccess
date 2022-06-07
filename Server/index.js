const express = require("express");
const app = express();
const mongoose = require("mongoose")
var cors = require('cors')
const Userroute = require("./routes/detail")

mongoose.connect("mongodb+srv://user:user268@cluster0.yn5ka.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("your database is connected succesfully")}).catch((err)=>console.log(err))

app.use(cors())     
app.use(express.json());
app.use("/api/user" ,Userroute)    


app.listen(5000, ()=>{
    console.log("backend server is running")
})