
var express = require("express");
var app = express();
require('colors');

// app.get('/0', function(req, res) {   // ECMAScript 5 style
//     res.sendfile('magellan.html');
// });

// app.get('/0', (req, res) => {      // ECMAScript 6 style
//   res.sendfile('magellan.html')
// });

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html') );
app.get('/0', (req, res) => res.sendFile(__dirname + '/index.html') ); // oneliner style
app.get('/1', (req, res) => res.sendFile(__dirname + '/seville.html') );
app.get('/2', (req, res) => res.sendFile(__dirname + '/canaryislands.html') );
app.get('/3', (req, res) => res.sendFile(__dirname + '/capeverde.html') );
app.get('/4', (req, res) => res.sendFile(__dirname + '/magellan.html') );
app.get('/5', (req, res) => res.sendFile(__dirname + '/guam.html') );
app.get('/6', (req, res) => res.sendFile(__dirname + '/phillippines.html') );

//////////////////////////////////////////////////////////////bonus #2

// Add a /next route which will serve up a JSON response
// that tells the user what location comes after a given location.
// The route should take a query string of the current location
// e.g. /next?location=Seville.
// Return a JSON response that looks like the following:
// { location: 'Seville', nextLocation: 'Canary Islands' }

var places = [
  "Ferdinand Magellan",
  "Seville",
  "Canary Islands",
  "Cape Verde",
  "Straits of Magellan",
  "Guam",
  "Phillippines"
  ]

var checkLocation = (req, res, next) => {
    console.log("Checking checkLocation".orange, req.query.location);
    if (req.query.location) {
        //do something clever with the array here
        res.json( { location: places[x], nextLocation: places[x+1] } );
         next();
    } else {
        console.log("next without location");
    }
}
app.get('/*/next/', checkLocation);

app.use(express.static("."));
/////////////////////////////////////////////////////bonus #1

app.use(function(req, res){
    res.send("no why boy come dis fa now mon");
});

////////////////////////////////////////////////////////////
var PORT = process.env.PORT || 8080
app.listen(PORT, (err) => {
    if(err) {
        console.log("Server Error".red, err);
        process.exit(1);
    }
    console.log("Server is up and listening to port".black, PORT);

    // console.log(app._router.stack)
})
