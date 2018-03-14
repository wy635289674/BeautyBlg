<template>
	<div class="deta_wrap">
		<div class="deta_con">
			
		<ul>
			<li>姓名：{{obj.artileName}}</li>
			<li>标题：{{obj.artileTitle}}</li>
			<li>内容：<span v-html="obj.content"></span></li>
			<li>类别：{{obj.articleClass}}</li>
			<li>创建时间：<i class="iconfont icon-shijian1"></i>{{obj.createtime|data}}</li>
		</ul>

		<div class="pin_div">
			<h3>评论区</h3>
			<el-input type="textarea" :rows="2" placeholder="请输入评论内容" v-model="textarea">
			</el-input>
			<ol>
				<li @click="lun">
					发表评论
				</li>
				<li><i class="iconfont icon-pinglun"></i>
					<span>{{num}}</span></li>
				<li>
					<div class="zan" @click="zan" ref="div">
						<i class="iconfont icon-dianzan2" v-if="bool"></i>
						<i class="iconfont icon-dianzan3" v-if="!bool"></i>
						<span>点赞{{zanNum}}</span>
					</div>
				</li>
			</ol>

		</div>
		<div v-for="item in arr">
			<h3>评论展示</h3>
			<p>{{item.author}}</p>
			<p>{{item.content}}</p>
			<p> <i class="iconfont icon-shijian1"></i>{{item.createtime|data}}</p>

		</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "datails",
		data() {
			return {
				obj: {
					artileTitle: "",
					content: "",
					articleClass: ""
				},
				textarea: "",
				arr: [],
				num: "",
				bool: true,
				zanNum:0
			}
		},
		created(){
			var id = this.$route.query.id
			//			console.log(id)
			this.$store.dispatch("getArticleId", id)
				.then(res => {
//					console.log(res)
					this.obj = res.data
				}),
				this.$store.dispatch("articleIdGet", id)
				.then(res => {
					this.arr = res.data
				}),
				this.$store.dispatch("getNumber", id)
				.then(res => {
					this.num = res.data
					//				console.log(res.data)
				}),
				this.$store.dispatch("zanNumm", id)
				.then(res => {
					this.zanNum = res.data.zanNum
//					console.log(res.data.)
				})
		},
		methods: {
			lun() {
				var articleId = this.$route.query.id;
				var id = this.$route.query.id;
				this.$store.dispatch("commentPost", {
						commentpost: {
							author: "",
							content: this.textarea,
							articleId: articleId
						}
					})
					.then(res => {
						this.arr = res.data
						console.log(this.arr)
					});
				this.$store.dispatch("getNumber", id)
					.then(res => {
						this.num = res.data
						console.log(res.data)
					})

			},
			zan() {
				this.bool = false;
				var id = this.$route.query.id;
				this.zanNum++;
				var number=this.zanNum;
				this.$store.dispatch("dianZan",{
					article:{
						id:id,
						zanNum:number
					}
				})
				.then(res=>{
					this.zanNum = res.data[0].zanNum
//					console.log(res)
				})
			}
		},
		filters: {
			data: function(val) {
				var d = new Date(val);
				var year = d.getFullYear();
				var month = d.getMonth() + 1;
				var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
				var hour = d.getHours();
				var minutes = d.getMinutes();
				var seconds = d.getSeconds();
				return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
			}
		}
	}
</script>

<style scoped="scoped">
	.deta_wrap{
		width: 100%;
		height: 100%;
	}
	.deta_con{
		width: 80%;
		margin: auto;
	}
	* {
		font-size: 16px;
	}
	ul{
		list-style: none;
	}
	.pin_div {
		width: 100%;
		border-top: solid 1px;
		margin-top: 20px;
	}
	
	img {
		width: 80px;
		height: 60px;
	}
	
	p {
		margin: 5px;
	}
	
	ol {
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		list-style: none;
	}
	
	ol>li {
		flex: 1;
		height: 100%;
		text-align: center;
		line-height: 50px;
		border: solid 1px;
	}
</style>