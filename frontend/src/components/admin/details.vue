<template>
	<div>
		<ul>
			<li>标题：{{obj.artileTitle}}</li>
			<li>内容：<span v-html="obj.content"></span></li>
			<li>类别：{{obj.articleClass}}</li>
			
		</ul>
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
				}
			}
		},
		mounted() {
			var id=this.$route.query._id
//			console.log(id)
			this.$store.dispatch("getArticleId",id)
			.then(res=>{
				console.log(res)
				this.obj=res.data
			})
		}
	}
</script>

<style scoped="scoped">
	*{
		font-size:16px;
	}
</style>