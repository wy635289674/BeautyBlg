import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
import axios from "axios";

export default new Vuex.Store({
	state:{},
	mutations:{},
	actions:{
//		添加类别
		addClass(store,params){
			return axios.post("http://localhost:3022/addclass",{classify:params.classify})
		},
//		获取类别
		getClass(){
			return axios.get("http://localhost:3022/getclass")
		},
//		删除类别
		delClass(store,params){
			return axios.get("http://localhost:3022/delclass?id="+params._id)
		},
		
//		修给类别
		updataClass(store,params){
//			console.log(params.name)
//			console.log(params.id)
			return axios.get("http://localhost:3022/updataclass?name="+params.name+"&id="+params.id)
		},
//		创建文章
		createArticle(store,params){
			return axios.post("http://localhost:3022/createarticle",{article:params.article})
		},
//		获取文章
		getArticle(){
			return axios.get("http://localhost:3022/getarticle")
		},
//		删除文章
		delArticle(store,params){
			return axios.get("http://localhost:3022/delarticle?id="+params._id)
		},
//		修改文章
		articleEdit(store,params){
//			console.log(params.articlEdit)
			return axios.post("http://localhost:3022/articleedit",{articlEdit:params.articlEdit})
		},
//		根据id获取文章
		getArticleId(store,params){
//			console.log(params)
			return axios.get("http://localhost:3022/getarticleid?id="+params)
		},
//		提交评论
		commentPost(store,params){
//			console.log(params.commentpost)
			return axios.post("http://localhost:3022/comment",{commentpost:params.commentpost})
		},
//		根据id获取评论
		articleIdGet(store,params){
//			console.log(params)
			return axios.get("http://localhost:3022/articleidget?id="+params)
		},
//		根据id获取评论数量
		getNumber(store,params){
//			console.log(params)
			return axios.get("http://localhost:3022/getnumber?id="+params)
		},
//		根据id获取点赞数量
		zanNumm(store,params){
			console.log(params)
			return axios.get("http://localhost:3022/zannumm?id="+params)
		},
//		根据id提交点赞数量
		dianZan(store,params){
//			console.log(params)
			return axios.post("http://localhost:3022/dianzan",params)
		},
//		注册用户
		zhuCe(store,params){
//			console.log(params)
			return axios.post("http://localhost:3022/zhuce",params)
		},
//		获取已注册用户
		getAuthors(){
			return axios.get("http://localhost:3022/getauthors")
		},
//		修给用户
		updataUser(store,params){
//			console.log(params.name)
//			console.log(params.id)
			return axios.get("http://localhost:3022/updatauser?name="+params.name+"&id="+params.id)
		},
//		获取评论
		getPingLun(){
			return axios.get("http://localhost:3022/getinglun")
		},
//		删除评论
		commenDelete(store,params){
			return axios.get("http://localhost:3022/commendelete?id="+params._id)
		},
//		修给评论
		updataPingLun(store,params){
//			console.log(params.name)
//			console.log(params.id)
			return axios.get("http://localhost:3022/updatapinglun?content="+params.content+"&id="+params.id)
		},
//		创建收藏
		shouC(store,params){
			console.log(params)
			return axios.post("http://localhost:3022/shouc",params)
		},
//		获取收藏
		getShou(){
			return axios.get("http://localhost:3022/getshou")
		},
	},
	getters:{}
})
