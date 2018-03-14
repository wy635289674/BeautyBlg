<template>
	<div>
		
		<el-container>
			<el-header>
				<img src="../../assets/logo.png"/>
				<span style="color:white;font-weight: bold; ">BeautyBloy</span>
			</el-header>

		</el-container>
		
		<el-container style="height: 600px; border: 1px solid #eee">
			<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			<el-button @click="fan">返回主页</el-button>
				<el-menu :default-openeds="['1', '3']" :router=true>
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-menu"></i>管理面板</template>
						<el-menu-item-group>
							<el-menu-item index="article">文章管理</el-menu-item>
							<el-menu-item index="classify">分类管理</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-edit-outline"></i>评论管理</template>
						<el-menu-item-group>
							<el-menu-item index="pinglun">评论</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-setting"></i>设置管理</template>
						<el-menu-item-group>
							<el-menu-item index="shezi">基础设置</el-menu-item>
							<el-menu-item index="sheziren">个人资料</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>

			<el-container>
				<router-view></router-view>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods:{
			fan(){
				this.$router.push("/")
			}
		}
	};
</script>

<style>
	.el-header{
		margin: 0;
		font-size: 30px;
		background-color: yellowgreen;
	}
	.el-header>img{
		vertical-align: middle;
	}
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
</style>