exports.up = function(knex, Promise) {
    return knex.schema.createTable('pets', (table) => {
        table.increments('id').primary()
        table.string('pet_type')
        table.string('owner_id')
        table.string('name')
        table.string('date_of_birth')
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('pets')
};