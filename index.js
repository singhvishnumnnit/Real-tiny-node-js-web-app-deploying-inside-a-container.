//Express is a web application framework for Node.js 
//that allows you to spin up robust APIs and web servers in a 
//much easier and cleaner way. 

const express = require('express'); //grabbing the main Express module

const app = express(); //create our app variable
 
 //This bite of code is where we tell our Express server how to handle 
 //a GET request to our server. 
 app.get('/', (req,res) => {
	 res.send('Hi there');
 });
 
 //Here '/' is the root of our website: 
 //in this case, localhost:8080.
 
 app.listen(8080, () => { //listen function, which tells the app which port to listen on. 
	 console.log('Listening on port 8080'); 
	 //The function passed-in as the second parameter is optional, 
	 //and runs when the server starts up. 
	 //This just gives us some feedback in the console 
	 //to know that our application is running.
 });