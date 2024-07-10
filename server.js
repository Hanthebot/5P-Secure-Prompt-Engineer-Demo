var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on " + port);
});

app.use("/src", express.static(__dirname + "/src"));
app.get('/', function(req, res){
    res.sendFile('/index.html', { root: __dirname + "" } );
});