const { json } = require("express/lib/response");
const user = require("../models/user");

//CRUD
function findAllUsers(req, res) {
    user.find().then( (usuarios) => {
        console.log(usuarios)
        return res.status(200).json({
            error: false,
            message: "Sucess",
            data: usuarios, // lista
            code: 10,
        });
        
    }).catch( (error) => {
        return res.status(500).json({
            error: true,
            message: "Error",
            
            code: 0,
        });
    });
  
}

function createUser(req, res){
    console.log("Create user...")
    console.log(req.body);
    let usuario = new user({
        id: req.body.id,
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });
    usuario
        .save(usuario)
        .then( (data) => {
            res.status(200).send({
                error: false,
                message: "OK",
                code: 20,
                data: data,
            });
        })
        .catch( (error) => {
            res.status(500).send({
                error: true,
                message: "Server down",
                code: 0,
            });
        });
}

function findUser(req, res){
    const id = req.params.id;
    user.findById(id)
    .then( (data) => {
        if(!data)
            res
                .status(404)
                .send({
                    message: "Id not found " + id,
                });
        else res.send(data);
    })
    .catch((error) =>{
        res.status(500).send({
            message: "Error with ID " + id
        });
    });
}

function updateUser(req, res){
    const id = req.params.id;
    user.findByIdAndUpdate(id, req.body)
    .then( (data) => {
        if(!data)
            res
                .status(404)
                .send({
                    message: "Id not found " + id,
                });
        else res.send({
            data: data,
            message: "User updated sucessfully"
        });
    })
    .catch((error) =>{
        res.status(500).send({
            message: "Error with ID " + id
        });
    });

}
function deleteUser(req, res){
    const id = req.params.id;
    user.findByIdAndRemove(id)
    .then( (data) => {
        if(!data)
            res
                .status(404)
                .send({
                    message: "Id not found " + id,
                });
        else res.send({
            data: data,
            message: "User deleted sucessfully"
        });
    })
    .catch((error) =>{
        res.status(500).send({
            message: "Error with ID " + id
        });
    });

}
  

module.exports = {
    findAllUsers,
    createUser,
    findUser,
    deleteUser,
    updateUser,

};



