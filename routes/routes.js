const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users-controller");

router.get("/", (req, res) => {res.send("This is the main page")});

router.get("/hello", (req, res) => {res.send("Hello World")});

module.exports = router;

router.get("/users", usersController.findAllUsers)
router.post("/users",usersController.createUser)
router.get("/users/:id", usersController.findUser)
router.delete("/users/:id", usersController.deleteUser)
router.put("/users/:id", usersController.updateUser)