const ModelHome = require('../models/home')

const createHome = (req, res) => {
    // Aqui es dodne ejecuto la logica de mi home 
    ModelHome.create(req.body)
    .then((row) => {
        res.status(201).send(row);
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
};

const findAllHomes = (req,res) => {
    ModelHome.findAll()
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
};

const findOneHome = (req, res) => {
    ModelHome.findOne(req.params.idHome)
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
};

const updateOneHome = (req, res) => {
    ModelHome.update(req.params.idHome, req.body)
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
};

const destroyOneHome = (req, res) => {
    ModelHome.destroy(req.params.idHome)
    .then(() => {
        res.status(204).send();
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
}

const softDeleteOneHome = (req, res) => {
    ModelHome.softDelete(req.params.idHome)
    .then(() => {
        res.status(204).send();
    })
    .catch((err) => {
        res.status(400).send(err.message);
    })
}

module.exports = {
    createHome,
    findAllHomes,
    findOneHome,
    updateOneHome,
    destroyOneHome,
    softDeleteOneHome
}