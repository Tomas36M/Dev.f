const request = require('request');
/* request('https://swapi.dev/api/people/1/', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    const bodyJson = JSON.parse(body);
    console.log(bodyJson);
}); */

function getPeopleById (id){
    request(`https://swapi.dev/api/people/${id}/`, function (error, response, body) {
        if (response.statusCode === 200) {
            const bodyJson = JSON.parse(body);
            console.log(bodyJson);
        } else {
            console.log(`Ocurrio un error: ${response.statusCode} ${response.statusMessage}`);
        }    
    });
}

getPeopleById(1);
getPeopleById(201);