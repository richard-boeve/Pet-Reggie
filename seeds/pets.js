
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
        {id: 1, pet_type: 'cat', owner_id: '1', name: 'oliver', date_of_birth: '25/08/2014'},
        {id: 2, pet_type: 'dog', owner_id: '2', name: 'omar', date_of_birth: '25/09/2014'},
        {id: 3, pet_type: 'rabbit', owner_id: '3', name: 'jip', date_of_birth: '25/10/2014'},
        {id: 4, pet_type: 'cat', owner_id: '4', name: 'luna', date_of_birth: '25/08/2015'},
        {id: 5, pet_type: 'dog', owner_id: '5', name: 'roger', date_of_birth: '25/08/2016'},
        {id: 6, pet_type: 'rabbit', owner_id: '6', name: 'carrots', date_of_birth: '30/08/2014'},
        {id: 7, pet_type: 'cat', owner_id: '1', name: 'reggie', date_of_birth: '01/08/2014'},
        {id: 8, pet_type: 'dog', owner_id: '1', name: 'rambo', date_of_birth: '25/09/2012'},
        {id: 9, pet_type: 'rabbit', owner_id: '2', name: 'blackie', date_of_birth: '25/08/2010'}
      ]);
    });
};

