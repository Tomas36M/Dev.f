const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')
const userController = require('../controllers/userController')

// Aqui debemos poner nuestras rutas

// Rutas Para Homes
router.post('/homes',(homeController.createHome))
router.get('/homes', (homeController.findAllHomes))
router.get('/homes/:idHome', (homeController.findOneHome))
router.patch('/homes/:idHome', (homeController.updateOneHome))
router.delete('/homes/:idHome', (homeController.softDeleteOneHome))
router.delete('/homes/destroy/:idHome', (homeController.destroyOneHome))

// Rutas Para Users
router.post('/users',(userController.createUser))
router.get('/users', (userController.findAllUsers))
router.get('/users/:idUser', (userController.findOneUser))
router.patch('/users/:idUser', (userController.updateOneUser))
router.delete('/users/:idUser', (userController.softDeleteOneUser))
router.delete('/users/destroy/:idUser', (userController.destroyOneUser))

// Aqui terminan is rutas

module.exports = router;