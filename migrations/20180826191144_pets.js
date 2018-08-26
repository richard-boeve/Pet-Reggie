exports.up = function(knex, Promise) {
    return knex.schema.createTable('pets', (table) => {
        table.increments('id').primary()
        table.integer('pet_type')
        table.integer('owner_id')
        table.string('name')
        table.date('date_of_birth')
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('pets')
};