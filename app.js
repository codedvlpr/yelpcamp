var express = require("express")
var app = express()
var port = 3000
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("home")
})

var campgrounds = [
    {
        name: "Salmon Creek",
        image: "https://cdn.pixabay.com/photo/2016/11/29/04/17/bonfire-1867275_960_720.jpg"
    },
    {
        name: "Granite Hill",
        image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://cdn.pixabay.com/photo/2017/08/17/08/08/camp-2650359_960_720.jpg"
    }
]

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds})
})

app.get("/campgrounds/new", function(req, res){
    res.render("newcamp")
})

app.post("/campgrounds", function(req, res){
    var name = req.body.name
    var image = req.body.image
    var campObject = {
        name: name,
        image: image
    }
    campgrounds.push(campObject)
    res.redirect("campgrounds")
})

app.listen(port, function(){
    console.log(`Your server has started on localhost:${port}`)
})