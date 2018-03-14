<template>
	<div>
		<h1>个人资料</h1>
		<el-container direction="vertical">

			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="修改昵称">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
			</el-form>

			<el-button type="button" @click="bao">保存</el-button>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: ""
				},
				id: "",
				imageUrl: ''
			}
		},
		mounted() {
			var user = this.name = sessionStorage.getItem("name")
			//			console.log(this.name)
			this.$store.dispatch("getAuthors")
				.then(res => {
					//					console.log(res.data)
					for(var i = 0; i < res.data.length; i++) {
						if(user == res.data[i].name) {
							this.form.name = res.data[i].name
							this.id = res.data[i]._id
						}
					}
				})
		},
		methods: {
			bao() {
				console.log(this.id);
				var obj = {
					name: this.form.name,
					id: this.id
				}
				this.$store.dispatch("updataUser", obj)
					.then(res => {
						console.log(res.data)
						sessionStorage.setItem("name", res.data.name)
					});
			}
		}
	}
</script>

<style scoped="scoped">

</style>