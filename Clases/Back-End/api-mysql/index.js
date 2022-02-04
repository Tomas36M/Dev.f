const express = require('express');

//initialize express
const app = express();

//invocar las rutas
require('./routes/routes')( app );

//Start server
app.listen(3000, () => {
    console.log('Server is running!');
})