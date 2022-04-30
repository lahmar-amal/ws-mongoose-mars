const mongoose = require("mongoose");
// const Schema = mongoose.Schema
// destructuring
const { Schema, model } = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
    },
    age: Number,
    email: {
        type: String,
        required: true,
    },
});

module.exports = User = model("User", userSchema);
