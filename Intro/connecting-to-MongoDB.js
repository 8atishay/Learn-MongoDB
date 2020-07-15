// Providing a MongoDB Client
var mongoClient = require("mongodb").MongoClient;

// A URL at which MongoDB service is running
// var url = "mongodb://localhost:27017";
var url = "mongodb://MyTester:xyz123@localhost:27017/ecommercedb";

// Make a connection to MongoDB Service
mongoClient.connect(url,function(err,db){
    if(err){
        throw err;
    }
    console.log("Succesfully connectes to DB");
    db.close();
})