
exports.up = function(knex, Promise) {
    return knex.schema.createTable('owners', (table) => {
        table.increments('id').primary()
        table.string('first_name')
        table.string('last_name')
        table.string('street')
        table.string('suburb')
        table.string('city')
        table.string('postcode')
        table.string('country')
        table.string('phone1')
        table.string('phone2')
        table.string('phone3')
        table.string('email1')
        table.string('email2')
        table.string('email3')
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('owners')
};
