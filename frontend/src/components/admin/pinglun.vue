<template>
	<div class="f">
		<span class="tou">评论管理>评论</span>
		
		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="index"></el-table-column>
			<el-table-column label="创建日期" width="180" type=index>
				<template slot-scope="scope">
					<i class="el-icon-time">{{ scope.row.createtime|datetim }}</i>
					<span style="margin-left: 10px">{{ scope.row.data}}</span>
				</template>
			</el-table-column>
			<el-table-column label="评论" width="180">
				<template slot-scope="scope">
					<el-popover trigger="hover" placement="top">
						<div slot="reference" class="name-wrapper">
							<el-tag size="medium">{{ scope.row.content }}</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="commentDelete(scope.$index, scope.row)">删除</el-button>
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
			this.$store.dispatch("getPingLun")
				.then((res) => {
					console.log(res)
					this.tableData = res.data
				})
		},
		methods: {
			commentDelete(index, row) {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					this.$store.dispatch("commenDelete", row)
						.then(res => {
							this.tableData = res.data
						});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});

			},
			handleEdit(index, row) {
				console.log(index, row);
				this.$prompt('请输入评论', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					inputPattern: /\S/,
					inputErrorMessage: '请输入评论'
				}).then(({ value }) => {
					this.$message({
						type: 'success',
						message: '您输入的评论: ' +value
					});
					
					var obj={
						content:value,
						id:row._id
					}
					
					this.$store.dispatch("updataPingLun", obj)
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