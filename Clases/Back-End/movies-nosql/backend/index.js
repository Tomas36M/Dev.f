const express = require('express');
const cors = require('cors');

const app = express();



app.set( 'port', process.env.PORT || 3000 );
app.use( express.urlencoded( { extended: false } ) );
app.use(cors)

app.listen(app.get('port'));
console.log('server listening!!', app.get( 'port' ));