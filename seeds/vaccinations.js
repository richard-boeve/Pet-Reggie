
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vaccinations').del()
    .then(function () {
      // Inserts seed entries
      return knex('vaccinations').insert([
        {id: 1, vaccination_type_id: '1', date_administered: '10/08/2018', pets_id: '1'},
        {id: 2, vaccination_type_id: '2', date_administered: '10/07/2018', pets_id: '2'},
        {id: 3, vaccination_type_id: '3', date_administered: '10/07/2018', pets_id: '3'},
        {id: 4, vaccination_type_id: '1', date_administered: '10/08/2018', pets_id: '4'},
        {id: 5, vaccination_type_id: '2', date_administered: '10/07/2018', pets_id: '5'},
        {id: 6, vaccination_type_id: '3', date_administered: '10/07/2018', pets_id: '6'},
        {id: 7, vaccination_type_id: '1', date_administered: '10/08/2018', pets_id: '7'},
        {id: 8, vaccination_type_id: '2', date_administered: '10/07/2018', pets_id: '8'},
        {id: 9, vaccination_type_id: '3', date_administered: '10/07/2018', pets_id: '9'}
      ]);
    });
};

