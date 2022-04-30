const express = require("express");

const app = express();
require("dotenv").config();
const connectDB = require("./config/ConnectDB");
// require model
const User = require("./models/User");
connectDB();
//Create Many Records with model.create()
// User.create(
//     [
//         { name: "mohamed", email: "mohamed@gmail.com", age: 4 },
//         { name: "walid", email: "walid@gmail.com", age: 5 },
//     ],
//     (err, data) => {
//         err ? console.log("ERROR", err) : console.log("data", data);
//     }
// );

//Use model.find()
User.find((err, data) => {
    err ? console.log("ERROR", err) : console.log("data", data);
});

const port = 5000;

app.listen(port, (err) =>
    err
        ? console.log("ERROOOOR!!!", err)
        : console.log(`this server is running on port : ${port}`)
);
