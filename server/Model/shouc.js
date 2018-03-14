var mongoose=require("../lib/db");

var Schema=mongoose.Schema;

var shouc=new Schema({
	artileTitle:{type:String},
	content:{type:String},
	articleClass:{type:String},
	artileName:{type:String},
	zanNum:{type:String},
	createtime:{type:String},
})
module.exports=mongoose.model("shouc",shouc);