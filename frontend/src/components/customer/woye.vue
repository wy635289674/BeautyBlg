<template>
	<div>
		<h2 @click="fan"><返回</h2>
		<h1>我的主页</h1>
	</div>
</template>

<script>
	export default{
		methods:{
			fan(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
</style>