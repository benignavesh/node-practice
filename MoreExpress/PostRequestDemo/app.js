var express = require('express');
var bodyparser = require('body-parser')
app = express();
app.use(bodyparser.urlencoded({extended: true})); //used to parse body to render the req.body template
app.set('view engine', 'ejs');
var friends = ['Avesh', 'Apoorv', 'Arpan', 'Monty'];
app.get("/", function(req, res)
{
    res.render('home');
});
app.get('/friends', function(req, res)
{
    
    res.render('friends', {friends:friends});
});
app.post('/addfriend', function(req, res)
{
    //console.log(req.body.newfriend); // contains all of the data from the requests body
    // this requies the use of package body-parser
    var newfriend = req.body.newfriend;
    friends.push(newfriend); // push the string into the friends array
    //res.send("Live from addFriend POST route.")
    res.redirect('/friends')
});
app.listen(3000,function()
{
    console.log("Server listening at 3000");
})