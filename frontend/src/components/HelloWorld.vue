<template>
	<div class="hello">
		<div class="log">
			<div class='sele'>
				<el-dropdown :router=true>
					<span class="el-dropdown-link">{{name}}<img src="../assets/logo.png" class="tou_img" /><i class="el-icon-arrow-down el-icon--right"></i></span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item><span @click="woye"><i class="el-icon-menu"></i>我的主页</span></el-dropdown-item>
						<el-dropdown-item><span @click="chang"><i class="el-icon-document"></i>收藏文章</span></el-dropdown-item>
						<el-dropdown-item><span @click="sheziren"><i class="el-icon-setting"></i>设置</span></el-dropdown-item>
						<el-dropdown-item><span @click="tui"><i class="el-icon-back"></i>退出</span></el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<ul>

				<li>
					<router-link to="/">首页</router-link>
				</li>
				<li>
					<router-link to="/mine">我的</router-link>
				</li>
				<li>
					<router-link to="/article">写文章</router-link>
				</li>
			</ul>

		</div>
		<router-view></router-view>

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				name: "我的",
			};
		},
		created() {
			this.name = sessionStorage.getItem("name")
			console.log(this.name)
		},
		methods: {
			tui() {
				this.$confirm('是否继续退出?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '确认退出!'
					});
					sessionStorage.removeItem("name")
					this.name = sessionStorage.getItem("name")
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消退出'
					});
				});
				
			},
			sheziren() {
				console.log(1)
				this.$router.push("sheziren")
			},
			chang() {
				console.log(1)
				this.$router.push("chang")
			},
			woye() {
				console.log(1)
				this.$router.push("woye")
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	.hello {
		width: 100%;
		height: 100%;
	}
	
	.log {
		width: 100%;
		height: 100px;
		background-image: url(../assets/3.jpg);
		background-size: 100%;
		position: relative;
	}
	
	.log>ul {
		width: 200px;
		;
		display: flex;
		height: 100%;
		line-height: 50px;
		justify-content: space-around;
		list-style: none;
		position: absolute;
		right: 0;
		top: 0px;
	}
	
	.log>ul>li a {
		color: black;
		text-decoration: blink;
	}
	
	.sele {
		float: right;
		margin-right: 200px;
	}
	
	.el-menu el-menu-demo el-menu--horizontal {
		width: 100%;
	}
	
	.tou_img {
		border-radius: 50%;
	}
	.el-button el-button--default el-button--small{
		width: 80px;
	}
</style>