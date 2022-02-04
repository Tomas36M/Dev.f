const mysql = require('mysql2');
const dbConfig = require('../database')

//Crear conexion con base de datos

const conection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port: '3306'
});

conection.connect(function(error) {
    if (error) throw error;
    console.log('Succesfully connected!');
})

module.exports = conection;