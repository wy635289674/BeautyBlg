var mongoose=require("../lib/db");

var Schema=mongoose.Schema;

var classify=new Schema({
	
	name:{type:String},
	createtime:{type:Date},
})
module.exports=mongoose.model("classify",classify);
