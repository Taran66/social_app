const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")

dotenv.config()

mongoose.connect("mongodb+srv://taranpreet1911:SOCIALproject123@social-app.8kaizel.mongodb.net/?retryWrites=true&w=majority&appName=social-app",{useUnifiedTopology: true},() => {
    console.log("Connected to MongoDB")
});

app.listen(8800, ()=>{
    console.log("Backend server is running")
})