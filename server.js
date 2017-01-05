const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const Driver = require('./database')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

//this will come from form that drivers fill out
app.post('/drivers', function(req,res){
	Driver.create({ name: req.body.name, destination: req.body.destination, origin: req.body.origin, date: req.body.date, seats: req.body.seats, price: req.body.price, email: req.body.email }).then(function(driver) {
 
	  console.log(driver.get({
	    plain: true
	  })) 
	})
})

app.post('/trips', function(req,res){
	

	//will query database for all drivers that meet the criteria of rider's request
	Driver.findAll({
		where: {
			destination: req.body.destination,
			origin: req.body.origin,
			date: req.body.date
		}
	}).then(function(driver){
		//this gives you just an object with the selected user
		res.send(driver[0].dataValues);
	})
})

app.get('/allDrivers', function(req,res){
	//will render all drivers for when people want to see all trips
	Driver.findAll().then(function(driver){
		res.send(driver)
	})
}) 

app.post('/driverProfile', function(req,res){
	//this might be a get request
	Driver.findAll({
		where: {
			email: req.body.email
		}
	}).then(function(driver){
		res.send(driver)
	})
	
})

app.post('/updateSeats', function(req, res){
	//this should be triggered anytime that someone is selected
	//when someone selects trip to take, will update number of seats 
	//have front end people close it if number of seats exceeds capacity, maybe Ill do 
	//that actually
	Driver.findOne({ where: { email: req.body.email } }).then(function(data){
		let seatNum = data.dataValues.seats - 1;
		data.updateAttributes({
			seats: seatNum
		})
	})
})

app.post('/random', function(req, res){
	console.log("new random!!")
	res.send("hello back!!")

})

app.listen(3000, function(){
    console.log("new Hitch server is running on 3000")


})








