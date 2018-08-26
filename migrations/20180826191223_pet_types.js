exports.up = function(knex, Promise) {
    return knex.schema.createTable('pet_type', (table) => {
        table.increments('id').primary()
        table.string('type')
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('pet_type')
};