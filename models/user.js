const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true

    },
    name:{
        type: String,
        require: true
        
    },
    password:{
        type: String,
        requiere: true

    },
    email:{
        type: String,
        require: true

    },
});

module.exports = mongoose.model("user", UserSchema);