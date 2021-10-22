// https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/
const request = require('request');
const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

// Lista a todos los autores

const listAuthors = () => {
    request.get(URI, (error, response, body) => {
        if (response.statusCode === 200) {
            const authors = JSON.parse(body);
            console.log(authors);
        } else {
            console.log(response.statusCode, response.statusMessage)
        }
    });
}

// Listar un Autor

const getAuthor = (id) => {
    request.get(URI+id+`/`, (error, response, body) => {
        if (response.statusCode === 200) {
            const authors = JSON.parse(body);
            console.log(authors);
        } else {
            console.log(response.statusCode, response.statusMessage)
        }
    });
}

// Crear un objeto para enviarla como data
/*
const jsonSend = {
    name: "Tomas",
    last_name: "Munevar",
    nacionalidad: "MX",
    biography: "Elite Hacker JS",
    gender: "M",
    age: 26,
    is_alive: true
};
*/

// Aqui creo un autor

const createAuthor = (jsonData) => {
    const objConfig = {
        url: URI,
        form: jsonData
    }
    request.post(objConfig, (error, response, body) => {
        if (response.statusCode === 201) {
            const authors = JSON.parse(body);
            console.log(authors);
        } else {
            console.log(response.statusCode, response.statusMessage)
        }
    });
}

// Patch a un Autor

const updatedData = {
    name: "Isabela",
    last_name: "Escalante"
}

const updateAuthor = (id, jsonData) => {
    const objConfig = {
        url: URI+id+`/`,
        form: jsonData
    }
    request.patch(objConfig, (error, response, body) => {
        if (response.statusCode === 200) {
            const authors = JSON.parse(body);
            console.log(authors);
        } else {
            console.log(response.statusCode, response.statusMessage)
        }
    });
}

// Delete a un Autor

const deleteAuthor = (id) => {
    request.delete(URI+id+`/`, (error, response, body) => {
        if (response.statusCode === 204) {
            console.log(`El autor a sido eliminado`);
        } else {
            console.log(response.statusCode, response.statusMessage)
        }
    });
}

// Exportamos las funciones

module.exports = {
    listAuthors,
    getAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor
}