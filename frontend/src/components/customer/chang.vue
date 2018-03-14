<template>
	<div>
		<h2 @click="fan"><返回</h2>
		<div class="shou_wrap">
		<div class="shou_con">

			<div v-for="i in arr" class="menu">
					<p><img src="../../assets/9a9b27d09860383b749e20963c401b35.jpeg" class="tou_img" /> &nbsp;&nbsp;&nbsp;{{i.artileName}}</p>
					<p>{{i.artileTitle}}</p>
					<p v-html="i.content"></p>
					<p><i class="iconfont icon-shijian1"></i>{{i.createtime|data}}</p>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				arr:[]
			}
		},
		methods:{
			fan(){
				this.$router.go(-1)
			}
		},
		mounted(){
			this.$store.dispatch("getShou")
				.then((res) => {
					this.arr = res.data
					console.log(this.arr)
				})
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