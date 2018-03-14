<template>
	<div class="f">
		<span class="tou">管理面板>分类管理</span>
		
		<el-container>
			<el-header style="text-align:right;">
				<el-button @click="addClass">添加分类</el-button>
			</el-header>
		</el-container>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="index"></el-table-column>
			<el-table-column label="创建日期" width="180" type=index>
				<template slot-scope="scope">
					<i class="el-icon-time">{{ scope.row.createtime|datetim }}</i>
					<span style="margin-left: 10px">{{ scope.row.data }}</span>
				</template>
			</el-table-column>
			<el-table-column label="分类" width="180">
				<template slot-scope="scope">
					<el-popover trigger="hover" placement="top">
						<div slot="reference" class="name-wrapper">
							<el-tag size="medium">{{ scope.row.name }}</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
		mounted() {
			this.$store.dispatch("getClass")
				.then((res) => {
					this.tableData = res.data
				})
		},
		methods: {

			addClass() {
				this.$prompt('请输入类别', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					inputPattern: /\S/,
					inputErrorMessage: '请输入类别'
				}).then(({ value }) => {
					this.$message({
						type: 'success',
						message: '你新增的类别是: ' + value
					});
					this.$store.dispatch("addClass", { classify: value })
						.then((res) => {
							console.log(res);
							this.tableData = res.data
						})

				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消输入'
					});
				});
			},
			handleDelete(index, row) {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					this.$store.dispatch("delClass", row)
						.then(res => {
							this.tableData = res.data
						});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
				conlose.log(row)
			},
			handleEdit(index, row) {
				console.log(index, row);
				this.$prompt('请输入类别', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					inputPattern: /\S/,
					inputErrorMessage: '请输入类别'
				}).then(({ value }) => {
					this.$message({
						type: 'success',
						message: '您输入的类别: ' +value
					});
					
					var obj={
						name:value,
						id:row._id
					}
					
					this.$store.dispatch("updataClass", obj)
						.then(res => {
							this.tableData = res.data
						});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消输入'
					});
				});
			},
		},
		filters: {
			datetim: function(val) {
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