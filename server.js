require("dotenv").config()
//const cors = require("cors")
const express = require("express");
const mongoose = require("mongoose");

// Create server
const app = express();
//const port = 3001;

//Connection to DB
mongoose.connect(process.env.DATABASE_URL_CLOUD, {useNewUrlParser: true});
const db = mongoose.connection;


//Setear manejo de eventos
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connecting to the database"));

//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//Routes

const port = process.env.PORT || 4000;

//Start the server
app.use("/", require("./routes/routes"));









app.listen(port, () => console.log("The server are listening..."));



