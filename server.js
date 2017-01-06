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
	//below creates new row in db table method from sequelize 
    Driver.create({ name: req.body.name, destination: req.body.destination, origin: req.body.origin, date: req.body.date, seats: req.body.seats, price: req.body.price, email: req.body.email }).then(function(driver) {
		//after submitting on driver page form data this console logs what they entered
      console.log(driver.get({
        plain: true
      })) 
    })
})
// below is when rider fills out form on riderForm.jsx
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
//below not currently in use. 
app.get('/allDrivers', function(req,res){
    //will render all drivers for when people want to see all trips
    Driver.findAll().then(function(driver){
        res.send(driver)
    })
}) 
//below not currently in use. 
app.post('/driverProfile', function(req,res){
 
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
		//updateAttributes is a method of sequelize
        data.updateAttributes({
            seats: seatNum
        })
    })
})
//below just used for test purposes. not used in production
app.post('/random', function(req, res){
    console.log("new random!!")
    res.send(req.body)
})
app.listen(3000, function(){
    console.log("new Hitch server is running on 3000")
})