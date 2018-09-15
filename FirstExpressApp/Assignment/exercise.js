var express = require('express');
var app = express();

app.get('/', function(req, res)
{
    res.send("Hi there, welcome to my assignment");
    res.send('=================================');
    res.send("/speak/pig,cow,dog");
    res.send("/repeat/hello/3,5")
    res.send("/repeat/blah/2");
});
app.get('/speak/:name', function(req,res)
{
    var name = req.params.name;
    if (name=='pig')
    {
        res.send("The " + name + " says \'oink\'");
    }
    else if (name == 'cow')
    {
        res.send("The " + name + " says \'Moo\'");
    }
    else if (name == 'dog')
    {
        res.send("The " + name + " says \'Woof Woof\'");
    }
});
app.get('/repeat/hello/:num', function(req,res)
{
    var num = req.params.num;
    if (num=='3')
    {
        res.send("hello hello hello");
    }
    else if (num == '5')
    {
        res.send("hello hello hello hello hello");
    }   res.send("The " + name + " says \'Woof Woof\'");
});
app.get('/repeat/blah/:num', function(req,res)
{
    var num = req.params.num;
    if (num=='2')
    {
        res.send("blah blah");
    }
});
app.get('*', function(req, res)
{
    res.send("Sorry, page not foud... What are you doing with your life?");
});
app.listen(3000, function()
{
    console.log("Serving on port 3000.")
});