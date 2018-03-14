<template>
	<div class="wo">
		<div class="deng">
			<img src="../../assets/01.jpg"/>
			<p>{{name}}</p>
			<ul>
				<li>
					<router-link to="/login">登录</router-link>
				</li>
				<li>
					<router-link to="/regist">注册</router-link>
				</li>
			</ul>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				name:""
			}
		},
		created(){
			this.name=sessionStorage.getItem("name")
			console.log(this.name)
		}
	}
</script>

<style scoped="scoped">
	.wo {
		width: 100%;
		height: 800px;
		padding-top: 50px;
	}
	.deng{
		width: 30%;
		background-color: yellow;
		height: 30%;
		margin: auto;
		padding: 10px;
		box-sizing: border-box;
	}
	.deng>img{
		display: block;
		margin: auto;
		border-radius: 50%;
	}
	.wo>.deng>ul {
		width: 30%;
		height: 30px;
		margin: auto;
		margin-top: 30px;
		display: flex;
		justify-content: space-around;
		list-style: none;
	}
	p{
		text-align: center;
	}
</style>