
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vaccination_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('vaccination_type').insert([
        {id: 1, name: 'Dog Flu', frequency: 'yearly'},
        {id: 2, name: 'Cat Flu', frequency: '6 monthly'},
        {id: 3, name: 'Rabbit Flu', frequency: 'monthly'}
      ]);
    });
};
