
exports.up = function(knex) {
    return knex.schema.hasTable('users')
    .then((exists) => {
        if(!exists){
            return knex.schema.createTable('users', (table) => {
                table.increments('user_id').primary();
                table.string('name').notNullable();
                table.string('last_name').notNullable();
                table.string('email').notNullable();
                table.string('phone').notNullable();
                table.text('description');
                table.boolean('active').notNullable().defaultTo(true);
                table.timestamp('created_at').defaultTo(knex.fn.now());//Devulve la fecha y hora actual
            })
        }
    })
};

exports.down = function(knex) {
    return knex.schema.hasTable('users')
    .then((exists) => {
        if(exists){
            return knex.schema.dropTable('users')
        }
    });
};
