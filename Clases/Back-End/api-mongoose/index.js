const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// setings
app.set('port', 3000);

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

export default app;