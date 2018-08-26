# Pet-Reggie

Pet Reggie is a new way of registering your pet. It allows you to control the registration of your own pet by its microchip and also to keep an up to date record of its vaccinations. This data is deployed to the Blockchain and is part of an international ledger. Advantages are that you aren't relying on a vet to do this, you are in control of updates of your and your pets details. 

See 'Documentation' folder for Entity Relationship Diagram.

To install:
1. Clone the repo
2. Run the database migration files: npm run knex migrate:latest
3. Run the seed files: npm run knex seed:run
4. Open the database file 'dev.sqlite3'
5. Start the server: npm start
6. Open the website: https://localhost:3000