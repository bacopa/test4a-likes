var express = require("express")
var path = require("path")
var app = express();

app.use(express.static(path.join(__dirname, "./client")));

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/mongoose.js');
require("./server/config/routes.js")(app);

var server = app.listen(3000, function () {
	console.log("~~ time to like on port 3000!! ~~")
})	