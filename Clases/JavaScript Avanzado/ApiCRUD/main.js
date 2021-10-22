const goodReads = require('./crudAuthors');

const jsonSend = {
    name: "El pollo",
    last_name: "Frito",
    nacionalidad: "ES",
    biography: "Un pollo bien crujiente",
    gender: "M",
    age: 3,
    is_alive: true
};

goodReads.createAuthor(jsonSend);
goodReads.deleteAuthor(14485);