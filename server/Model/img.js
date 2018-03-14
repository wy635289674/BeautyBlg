var mongoose=require("../lib/db");

var Schema=mongoose.Schema;

var Img=new Schema({
	
	id:{type:String},
	img:{type:String},
})
module.exports=mongoose.model("Img",Img);
