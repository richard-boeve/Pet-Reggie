exports.up = function(knex, Promise) {
    return knex.schema.createTable('vaccination_type', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('frequency')
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('vaccination_type')
};