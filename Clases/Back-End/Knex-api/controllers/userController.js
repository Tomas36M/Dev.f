const ModelUser = require('../models/users')

const createUser = (req, res) => {
    // Aqui es dodne ejecuto la logica de mi home 
    ModelUser.create(req.body)
    .then((row) => {
        res.status(201).send(row);
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
};

const findAllUsers = (req,res) => {
    ModelUser.findAll()
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
};

const findOneUser = (req, res) => {
    ModelUser.findOne(req.params.idUser)
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
};

const updateOneUser = (req, res) => {
    ModelUser.update(req.params.idUser, req.body)
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
};

const destroyOneUser = (req, res) => {
    ModelUser.destroy(req.params.idUser)
    .then(() => {
        res.status(204).send();
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
}

const softDeleteOneUser = (req, res) => {
    ModelUser.softDelete(req.params.idUser)
    .then(() => {
        res.status(204).send();
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
}

module.exports = {
    createUser,
    findAllUsers,
    findOneUser,
    updateOneUser,
    destroyOneUser,
    softDeleteOneUser
}