//* Vamos a ver la configuracion basica de express.js
//* En back-end no podemos usar un import de algo
//* En nuestro back-end utilizamos nodeJS, el cual trae esa configuracion
//* Utilizamos require

const express = require('express');
const colors = require('colors');
const app = express(); //? Es la parte principal de mi aplicacion
const morgan = require('morgan')

//* Settings
app.set('port', process.env.PORT || 3000) //? Establecemos el numero de puerto y gracias a esto, 
app.set('json spaces', 2)                //? podemos usar el puerto en cualquier parte de la app

//* Configuracion del middleware
app.use(morgan('dev'))
app.use(express.json()) //? Este metodo le permite al servidor recivir formatos json y entenderlos
app.use(express.urlencoded({ extended: false }))

//* Routes

app.use(require('./routes/routes.js'))
app.use(require('./routes/home.js'))
app.use(require('../src/routes/suma.js'))
app.use(require('../src/routes/swapi.js'))
app.use(require('../src/routes/user.js'))
app.use('/api/movies', require('../src/routes/movies.js'))


//* Inicializar el servidor / starting the server
app.listen(app.get('port'), () => {
    console.log(`SERVIDOR CORRIENDO EN: http://localhost:${app.get('port')}`.bgBlue)
})