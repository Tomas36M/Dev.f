// El modelo se encarga de traer los datos de la base de datos
// No se encarga de validar datos ni resolver promesas
// Eso es trabajo del controlador

// Conectarme a la base de datos
// config.js exporta

const knex = require('../config');

const create = (bodyHome) => {
    //Crear un nuevo registro el tabla homes
    //bodyHome es un objeto que contiene los valores a insertar

    //Aqui ejecutamos la logica del insert pero con knex
    return knex // Retornanr una promesa
        .insert(bodyHome) // Que datos voy a insertar
        .into('homes') //De que tabla
        .returning(['house_id', 'title', 'description', 'guests', 'address', 'active', 'created_at'])
};

//Obtener todos los registros de la tabla home
const findAll = () => {
    return knex
        .select('*')
        .from('homes')
        .where({ active: true })
};

const findOne = (id) => {
    return knex
        .select('*')
        .from('homes')
        .where({ house_id: id});
}

const update = (id, bodyUpdate) => {
    return knex
        .update(bodyUpdate)
        .from('homes')
        .where({ house_id: id})
        .returning('*')
}

// Este si lo borra de la base de datos
const destroy = (id) => {
    return knex
        .del()
        .from('homes')
        .where({ house_id: id})
}

//Este no lo borra de la base de datos
const softDelete = (id) => {
    return knex
        .update({ active: false})
        .from('homes')
        .where({ house_id: id})
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy,
    softDelete
}
