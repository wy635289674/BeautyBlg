var mongoose=require("../lib/db");

var Schema=mongoose.Schema;

var comm=new Schema({
	author:{type:String},
	content:{type:String},
	articleId:{type:Schema.Types.ObjectId},
	createtime:{type:Date},
})
module.exports=mongoose.model("comm",comm);