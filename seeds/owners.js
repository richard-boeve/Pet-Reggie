
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('owners').del()
    .then(function () {
      // Inserts seed entries
      return knex('owners').insert([
        {id: 1, first_name: 'Mike', last_name: 'Green', street: '3/20 Thompson Street', suburb: 'Mount Cook', city: 'Wellington', postcode: '6011', country: 'New Zealand', phone1: '02118484', phone2: '022498498', phone3: '0468941085', email1: 'mikey23@hotmail.com', email2: 'jeff@gmail.com', email3: 'blah@gmail.com'},
        {id: 2, first_name: 'Susan', last_name: 'Kressin', street: '23 Bidwell Street', suburb: 'Mount Cook', city: 'Wellington', postcode: '6011', country: 'New Zealand', phone1: '04981981', phone2: '04894949', phone3: '0218494981', email1: 'adf@gae.com', email2: 'adf@gamil.com', email3: 'adf@gmail.com'},
        {id: 3, first_name: 'John', last_name: 'Hope', street: '33 Avon Street', suburb: 'Parnell', city: 'Auckland', postcode: '6001', country: 'New Zealand', phone1: '041560560', phone2: '021184198', phone3: '02198981', email1: 'adf@gail.com', email2: 'adfa@omo.com', email3: 'adfe@pojm.com'},
        {id: 4, first_name: 'Julia', last_name: 'Caputo', street: '8889 Levin Street', suburb: 'Highfield', city: 'Rotorua', postcode: '1478', country: 'New Zealand', phone1: '0181981', phone2: '0101981980', phone3: '0198198', email1: 'adfafd@gamil.com', email2: 'adfa@gmila.omm', email3: 'adf@mgail.com'},
        {id: 5, first_name: 'Margret', last_name: 'Thoreau', street: '2233 Evans Bay Parade', suburb: 'Roseneath', city: 'Wellington', postcode: '6021', country: 'Wellington', phone1: '02234234', phone2: '0234234', phone3: '023423424', email1: 'adfad@gmil.com', email2: 'adfadf@gamle.om', email3: 'eaefraf@gamil.com'},
        {id: 6, first_name: 'Peter', last_name: 'Camarillo', street: '234 Grafton Road', suburb: 'Hataitai', city: 'Wellington', postcode: '6021', country: 'New Zealand', phone1: '041241234', phone2: '0423434', phone3: '021234234', email1: 'adf@gamil.com', email2: 'adfa@gmail.omc', email3: 'adfa3@gfamlo.omc'}
      ]);
    });
};