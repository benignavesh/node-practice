console.log("Our Express app goes here.")
var express = require('express');
var app = express();

// "/" => " Hi There!"
app.get('/', function(req, res) // request as input, response as output
{
    res.send("Hi there.");
});
app.get('/preview', function(req, res)
{
    console.log("GET request to /preview")
    res.send("Preview from another route.");
});
app.get('/r/:formatName', function(req, res)
{
    res.send("Welcome to another /r route.")
});
app.get('/r/:formatName/format/:id', function(req, res)
{
    var formatName = req.params.formatName;
    console.log(req.params); // display all the routing parameters.
    res.send("Welcome to "+ formatName.toUpperCase() + " id page.");
});
app.get('*', function(req, res)
{
    console.log("* is used as a routing parameter to get all the routes except all that are defined");
    res.send("Page not found.");
});

app.listen(3000, function()
{
    console.log("Serving on port 3000.")
});