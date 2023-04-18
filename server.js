const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

const MONGODB_URI = "mongodb+srv://mongoose-learning-curve:Start123@@cluster0.fy0avua.mongodb.net/mongooseLearningCurve?retryWrites=true&w=majority"