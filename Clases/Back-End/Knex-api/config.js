//Tomamos la configuracion del entorno de node, si no existe usamos develovment
const env = process.env.NODE_ENV || 'development';

const knexfile = require('./knexfile')
const knex = require('knex');

module.exports = knex(knexfile[env]);