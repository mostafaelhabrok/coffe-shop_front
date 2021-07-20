
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('www'));

//var path = require('path');

// Setup Server

// const port = 8000;
const port = process.env.PORT || 80
const server = app.listen(port, listening);
function listening(){
    console.log("server running"); 
    console.log('running on localhost: '+port);
}

//Get Data
/* app.get('/tabs/drink-menu', function (request, response) {

    response.sendFile(path.join(__dirname, '/src/index.html'))
  });

app.get('/tabs/user-page', function (request, response) {
    response.sendFile('/src/app/pages/user-page/user-page.page.html')
  }); */