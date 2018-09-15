var express = require('express');
app = express();
app.use(express.static("public"));

app.get("/", function(req, res)
{
   // res.send("<h1>Welcome to the homepage.</h1>");
    res.render('home.ejs');
});
app.get("/hello/:thing", function(req, res)
{
    var thing = req.params.thing;
    //res.send("You landed at " + thing + " !");
    res.render('house.ejs', {thingVar:thing}); //thingVar from house.ejs : thing from app.js
})
app.get("/posts", function(req, res)
{
    var posts = [
        {
            title: "Post 1",
            author:"Avesh"
        },
        {
            title: "Post 2",
            author:"Avesh Verma"
        },
        {
            title: "Post 3",
            author:"AveshBhai"
        },
        {
            title: "Post 4",
            author:"Avi"
        }
    ];
    res.render("posts.ejs",{posts : posts})
});
app.listen(3000, function()
{
    console.log("Server is listening at port 3000")
})

// Whenever we use logic, which we don't want to display, such as if, while, or for loops, we use <% %> only.
// When we want to display the output, we use <%= %>.