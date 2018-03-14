var mongoose=require("mongoose");
var url="mongodb://localhost:27017/beauty";

mongoose.connect(url);

mongoose.connection.on("connected",function(){
	console.log("数据库连接成功")
});
mongoose.connection.on("error",function(){
	console.log("数据库连接失败")
});
mongoose.connection.on("disconnect",function(){
	console.log("数据库连接中断")
})
module.exports=mongoose;