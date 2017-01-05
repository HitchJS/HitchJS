const pg = require('pg');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://fkdyrlsr:JzhorQXQH_LpYcX30-1LWHvZvPFuqvRX@elmer.db.elephantsql.com:5432/fkdyrlsr');
//const sequelize = new Sequelize('postgres://vincentking:ilovetesting@localhost:5432/hitch');

sequelize
  .authenticate()
  .then(function(err) {
    console.log('database has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

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
	    type: Sequelize.DATE
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