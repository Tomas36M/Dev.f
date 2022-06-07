const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions = {
    origin: "http://localhost:8090"
}
app.use( express.urlencoded({extended: false}))

const port = 8090;
app.listen( 'port', () => {
    
})