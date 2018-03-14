<template>
	<div class="shou_wrap">
		<div class="shou_con">

			<div v-for="i in arr" class="menu">
				<router-link :to="'/shouye_details?id='+i._id">
					<p><img src="../../assets/9a9b27d09860383b749e20963c401b35.jpeg" class="tou_img" /> &nbsp;&nbsp;&nbsp;{{i.artileName}}</p>
					<p>{{i.artileTitle}}</p>
					<p v-html="i.content"></p>
					<p><i class="iconfont icon-shijian1"></i>{{i.createtime|data}}</p>
					<ul class="ping">
						<li>
							<i class="iconfont icon-pinglun"></i>
							<span>{{num}}</span>
						</li>
						<li>
							<i class="iconfont icon-dianzan1"></i>

						</li>
					</ul>
				</router-link>
				<p><span @click="shouc(i._id)"><i class="iconfont icon-dianzan3"></i></span></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "shouye",
		data() {
			return {
				arr: [],
				num: "",
				name: "",
				obj: ""
			}
		},
		//		获取信息
		mounted() {
			this.$store.dispatch("getArticle")
				.then((res) => {
					this.arr = res.data
				});
			this.name = sessionStorage.getItem("name")
			console.log(this.name)
		},
		methods: {
			shouc(id) {
				console.log(id)
				this.$store.dispatch("getArticleId", id)
					.then(res => {
						this.obj = res.data
						console.log(this.obj)
						this.$store.dispatch("shouC", this.obj)
//					.then(res => {
//						console.log(res.data)
//					})
					});
				
			}
		},
		//		时间过滤器
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

<style>
	.shou_wrap {
		width: 100%;
		height: 100%;
	}
	
	.shou_con {
		width: 80%;
		margin: auto;
	}
	
	.menu {
		width: 100%;
		border: solid 1px;
		padding-bottom: 10px;
	}
	
	img {
		width: 80px;
		height: 60px;
	}
	
	.tou_img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		vertical-align: middle;
	}
	
	p {
		margin-top: 5px;
	}
	
	.ping {
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
	}
	
	.ping>li {
		flex: 1;
		border: solid 1px;
		list-style: none;
		line-height: 50px;
		text-align: center;
	}
</style>