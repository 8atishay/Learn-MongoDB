// open cmd and type mongod to start the server
var express = require('express');
var mongoose = require('mongoose');

// pull information from HTML post
var bodyParser = require('body-parser');
var app = express();

var Brand = require('./models/brand');

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({'extended':true}));
// parse application/json
app.use(bodyParser.json());

mongoose.connect('mongodb://MyTester:xyz123@localhost:27017/ecommercedb'
                ,{ useNewUrlParser: true, useUnifiedTopology: true });


app.get("/",function(req,res){
    res.send("Welcome to Admin Portal");
});

app.get("/api/brands",function(req,res){
    Brand.getBrands(function(err,data){
        if(err){
            throw err;
        }else{
            res.json(data);
        }
    });
});

// We can use either method 1 or 2
// (((   1   )))

// app.get("/api/brands/:id",function(req,res){
//     Brand.getBrandById(req.params.id,function(err,data){
//         if(err){
//             throw err;
//         }else{
//             res.json(data);
//         }
//     })  
// });

// (((   2   )))
app.get("/api/brands/:id",function(req,res){
    Brand.findById(req.params.id,function(err,data){
        if(err){
            throw err;
        }else{
            res.json(data);
        }
    })  
});

// by default browser sends get request so
// For post put delete method we need client
// we are using rest easy chrome app
// we need to set header for post request
// Name: Content-type, Value: application/json
app.post('/api/brands',function(req,res){
    // var brand ={
    //     name: req.body.name,
    //     desc: req.body.desc
    // }
    Brand.create(req.body,function(err,data){
        if (err){
            throw err;
        }else{
            res.json(data);
            console.log("Document Posted Successfully");
        }
    });
})

app.put('/api/brands/:id',function(req,res){
    Brand.findByIdAndUpdate(req.params.id,req.body,function(err,data){
        if(err){
            throw err;
        }else{
            res.json(data);
        }
    })
})

app.delete('/api/brands/:id',function(req,res){
    Brand.findByIdAndRemove(req.params.id,function(err,data){
        if(err){
            throw err;
        }else{
            res.json(data);
            console.log("Document has been deleted");
        }
    })
})

app.listen(5000,function(){
    console.log("The Server is running at port 5000")
});