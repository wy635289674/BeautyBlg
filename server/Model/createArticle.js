var mongoose=require("../lib/db");

var Schema=mongoose.Schema;

var article=new Schema({
	artileTitle:{type:String},
	content:{type:String},
	articleClass:{type:String},
	createtime:{type:Date},
	artileName:{type:String},
	zanNum:{type:Number}
})
module.exports=mongoose.model("article",article);