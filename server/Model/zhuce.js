var mongoose=require("../lib/db");

var Schema=mongoose.Schema;

var authors=new Schema({
	name:{type:String},
	pass:{type:String},
})
module.exports=mongoose.model("authors",authors);