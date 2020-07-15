
//load mongoose to define a model class
var mongoose = require('mongoose');

var brandSchema = mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    desc:{
        type:String,
        require:true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
})

//collection in db should hav plural name 

var Brand = module.exports = mongoose.model("brand",brandSchema);

module.exports.getBrands = function(callback){
    Brand.find(callback);
}
module.exports.getBrandById = function(id,callback){
    Brand.findById(id,callback);
}