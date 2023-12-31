const express = require("express");
const routers = require("./Routes/routes");
const connectMongoose = require("./Models/dbConnect");
const cookieParser= require('cookie-parser');

const app= express();

// middlewares
app.use(express.json()); // to parse json data in request body
app.use(cookieParser());
app.use(routers);


app.listen(3000, async()=>{
    await connectMongoose();
    console.log("Server is running on port 3000");
})