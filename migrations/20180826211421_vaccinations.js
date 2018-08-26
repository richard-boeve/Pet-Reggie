exports.up = function(knex, Promise) {
    return knex.schema.createTable('vaccinations', (table) => {
        table.increments('id').primary()
        table.integer('vaccination_type_id')
        table.date('date_administered')
        table.integer('pets_id')

    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('vaccinations')
};