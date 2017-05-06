var db = require("../models");

module.exports = function(app) {
 app.get("/burgersnoteaten", function (req, res){
  db.burger.findAll ({
   where: {
	devoured: false
   }     
   }).then(function(dbBurger){            
      res.json(dbBurger);
   });  
  });

 app.get("/burgereaten", function(req,res){
  db.burger.findAll({
   where:{
 	devoured: true
   }
   }).then(function(dbBurger){
   		res.json(dbBurger);
   });
 });

 app.post("/addburger", function(req,res){
  db.burger.create(req.body).then(function(postBurger){
 	res.json(postBurger);
 	});
 });

 app.put("/eataburger", function(req,res){
  db.burger.update({
   devoured:req.body.devoured
 	},{
 	   where: {
 		id: req.body.id
 	   }
 	}).then(function(dbUpdate){
 		res.json(dbUpdate);
 		console.log(dbUpdate);
 	});

 });




};
