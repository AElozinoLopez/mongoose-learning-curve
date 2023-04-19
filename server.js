const express = require("express");
const mongoose = require("mongoose");
// const Router = require("./routes")

const app = express();

app.use(express.json());

const MONGODB_URI = "mongodb+srv://mongoose-learning-curve:Start123@cluster0.fy0avua.mongodb.net/mongooseLearningCurve?retryWrites=true&w=majority" 

// Connecting to the database
mongoose.connect(MONGODB_URI)
    .then((result) => {
        console.log("Connected to the database successfully");
    })
    .catch(err => {err.message})

// Creating a schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        default: 0,
    }
});