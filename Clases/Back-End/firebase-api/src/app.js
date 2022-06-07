const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path')

const app = express();

app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.engine(
    ".hbs",
    exphbs.create({
        defaultLayout: "main",
        extname: ".hbs"
    }).engine
);
app.set("view engine", ".hbs");

app.use(morgan('dev'));
app.use(express.urlencoded( {extended: false}))

app.use()