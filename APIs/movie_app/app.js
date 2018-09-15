var express = require('express')
app = express()
var request = require('request');
app.set('view engine', 'ejs');

app.get('/results', function(req,res)
{
    var query = req.query.search;
    var url = "http://omdbapi.com/?s=" + query; 
    //res.send("hello, it works");
    request(url, function(error, response, data)
    {
        if(!error && response.statusCode == 200)
        {
            var results = JSON.parse(body)
        }
    })
    res.render("results");


})


app.listen(3000, function()
{
    console.log("Movie App has started");
})