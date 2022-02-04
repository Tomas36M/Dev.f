const knex = require('../config');

const create = (bodyUser) => {
    //Crear un nuevo registro el tabla homes
    //bodyHome es un objeto que contiene los valores a insertar

    //Aqui ejecutamos la logica del insert pero con knex
    return knex // Retornanr una promesa
        .insert(bodyUser) // Que datos voy a insertar
        .into('users') //De que tabla
        .returning('*')
};

//Obtener todos los registros de la tabla home
const findAll = () => {
    return knex
        .select('*')
        .from('users')
        .where({ active: true })
};

const findOne = (id) => {
    return knex
        .select('*')
        .from('users')
        .where({ user_id: id});
}

const update = (id, bodyUpdate) => {
    return knex
        .update(bodyUpdate)
        .from('users')
        .where({ user_id: id})
        .returning('*')
}

// Este si lo borra de la base de datos
const destroy = (id) => {
    return knex
        .del()
        .from('users')
        .where({ user_id: id})
}

//Este no lo borra de la base de datos
const softDelete = (id) => {
    return knex
        .update({ active: false})
        .from('users')
        .where({ user_id: id})
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy,
    softDelete
}