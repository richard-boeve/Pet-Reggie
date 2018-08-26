
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pet_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('pet_type').insert([
        {id: 1, type: 'cat'},
        {id: 2, type: 'dog'},
        {id: 3, type: 'rabbit'}
      ]);
    });
};
