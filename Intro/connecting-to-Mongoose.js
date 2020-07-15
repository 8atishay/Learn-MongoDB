//Publisher and Subscriber Mover 
//Event Driven Model

var mongoose = require("mongoose");

// var options={
//     user:"MyTester",
//     pass:"xyz123"
// }
// mongoose.connect('mongodb://localhost:27017/ecommercedb',{useNewUrlParser: true},options);
mongoose.connect('mongodb://MyTester:xyz123@localhost:27017/ecommercedb'
                ,{ useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on("open",function(){
    console.log("we are connected");
})

db.on("error",function(){
    console.log("there is an error");
})

db.close();