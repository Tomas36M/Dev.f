require('dotenv').config()
const express = require('express');
const homeRoutes = require('./routes/homeRoutes')

const app = express();

app.set('json spaces', 2)  

// Configuracion basica de express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', homeRoutes)


// Aqui inicio el servidor, para que escuche 
app.listen(3000,() => {
    console.log('Server ON');
})