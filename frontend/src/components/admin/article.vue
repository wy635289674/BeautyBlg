<template>
	<div class="f">
		<span class="tou">管理面板>文章管理</span>
		
		<el-container>
			<el-header style="text-align:right;">
				<el-button @click="addArticle">添加文章</el-button>
			</el-header>
		</el-container>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="index"></el-table-column>
			<el-table-column label="创建日期" width="180" type=index>
				<template slot-scope="scope">
					<i class="el-icon-time">{{ scope.row.createtime|data }}</i>
					<span style="margin-left: 10px">{{ scope.row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column label="文章标题" width="180">
				<template slot-scope="scope">
					<el-popover trigger="hover" placement="top">
						<div slot="reference" class="name-wrapper">
							<el-tag size="medium">{{ scope.row.artileTitle }}</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column label="分类" width="180">
				<template slot-scope="scope">
					<el-popover trigger="hover" placement="top">
						<div slot="reference" class="name-wrapper">
							<el-tag size="medium">{{ scope.row.articleClass }}</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" type="danger" @click="handleCheck(scope.$index, scope.row)">查看</el-button>
					<el-button size="mini" @click="articlePut(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="articleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: []

			}
		},
//		获取信息
		mounted() {
			this.$store.dispatch("getArticle")
				.then((res) => {
					this.tableData = res.data
					console.log(this.tableData)
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
		},
		methods: {
//			添加
			addArticle() {
				this.$router.push("createArticle")
			},
//			删除
			articleDelete(index, row) {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					this.$store.dispatch("delArticle", row)
						.then(res => {
							this.tableData = res.data
							//							console.log(row)
						});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});

			},
//			查看
			handleCheck(index, row) {
				//				console.log(row)
				this.$router.push({ path: "details", query: row })
			},
//			编辑
			articlePut(index, row) {
				console.log(row)
				this.$router.push({path:"articleEdit",query:row})
			}
		}
	}
</script>

<style scoped="scoped">
	.f {
		width: 100%;
	}
	
	h1 {
		width: 100%;
		text-align: center;
		background-color: #666666;
		height: 50px;
		line-height: 50px;
	}
	
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
	.tou{
		font-size: 20px;
	}
</style>