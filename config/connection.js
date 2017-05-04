var mysql = require("mysql");

var connection = mysql.createConnection({
	
	// host:"localhost",
	// port:3306,
	// user:"root",
	// password: "z1qatgb5",
	// database:"burgers_db"
	host: 'us-cdbr-iron-east-03.cleardb.net',
    port: 3306,
    user: 'b4950e02dee864',
    password: 'z1qatgb5',
    database: 'heroku_4f10a6637010781',
    connectionLimit: 5
});
connection.connect(function(err){
	if(err) throw err;

	console.log("connected to: " + connection.threadId);
});

module.exports= connection;