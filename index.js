var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req,res){

    res.render("index");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("App listening on port 3000");
});