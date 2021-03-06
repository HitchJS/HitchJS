const pg = require('pg');
const Sequelize = require('sequelize');
//const sequelize = new Sequelize('postgres://vincentking:ilovetesting@localhost:5432/hitch');
// below we are using a cloud db called elephantsql. 
const sequelize = new Sequelize('postgres://fkdyrlsr:JzhorQXQH_LpYcX30-1LWHvZvPFuqvRX@elmer.db.elephantsql.com:5432/fkdyrlsr')

//below is to check if your db is connected
sequelize
  .authenticate()
  .then(function(err) {
    console.log('database has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

//below is our schema 
const Driver = sequelize.define('driver', {
      name: {
        type: Sequelize.STRING
      },
      destination: {
        type: Sequelize.STRING
      },
      origin: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      seats: {
        type: Sequelize.INTEGER
      }, 
      price: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      }
});
//creates database I only need this the first 
//time I run the file to create the table
// Driver.sync({force: true}).then(function () {
//   // Table created
//   console.log("table created i hope")
// });
module.exports = Driver;