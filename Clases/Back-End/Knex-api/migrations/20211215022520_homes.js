// Inicializar knex: knex init
// Crear knex migration: knex migrate:make homes

// Exports.up
//Aqui vamos a colocar toda la logica de creacion de nuestras querys
//Todas mis consultas que voy a ejecutar para manipular mis bases de datos

exports.up = function(knex) {
    return knex.schema.hasTable('homes')
    .then((exists) => {
        if(!exists){
            return knex.schema.createTable('homes', (table) => {
                table.increments('house_id').primary();
                table.string('title').notNullable();
                table.text('description');
                table.integer('guests');
                table.text('address');
                table.boolean('active').notNullable().defaultTo(true);
                table.timestamp('created_at').defaultTo(knex.fn.now());//Devulve la fecha y hora actual
            })
        }
    })
};

exports.down = function(knex) {
    return knex.schema.hasTable('homes')
    .then((exists) => {
        if(exists){
            return knex.schema.dropTable('homes')
        }
    });
};

// Correr migraciones UP
// Si quiero correr una migracion ejecuto: knex migrate:latest
// knex migrate:up nombremigracion.js 20211215022520_home.js

// Deshacer Migraciones DOWN
// knex migrate:rollback latest
// knex migrate:down nombremigracion.js 20211215022520_home.js


