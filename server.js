var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require ("express-handlebars");
var methodOverride = require("method-override");
var PORT = process.env.PORT || 3000;
var app = express();

// var routes = require("./controllers/burgers_controller.js");
var db = require("./models");

// app.use(express.static(process.cwd() + "/public"));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));
// app.use("/", routes);

// app.engine("handlebars", exphbs({ defaultLayout: "main"}));
// app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public"));

require('./routes/html-routes.js')(app);
require('./routes/burger-api-routes.js')(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});