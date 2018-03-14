<template>
	<el-container>
		<span>管理面板>添加文章</span>
		<el-header>添加文章</el-header>
		<el-form v-model="form">
			<el-form-item label="名称作者">
				<el-input v-model="form.artileName"></el-input>
			</el-form-item>
			<el-form-item label="文章名称">
				<el-input v-model="form.artileTitle"></el-input>
			</el-form-item>
			<el-form-item label="文章分类">
				<el-select v-model="form.arrileClassify" placeholder="请选择文章类别">
					<el-option v-for="i in arr" :label="i.name" :value="i.name"></el-option>
				</el-select>
			</el-form-item>
		</el-form>
		<quill-editor :content="content" :options="editorOption" @change="onEditorChange($event)">
		</quill-editor>
		</quill-editor>
		<el-button @click="publish" style="width: 100px;">发布文章</el-button>
	</el-container>

</template>

<script>
	import { quillEditor } from 'vue-quill-editor';
	export default {
		name: "createArticle",
		data() {
			return {
				form: {
					artileTitle: "",
					arrileClassify: "",
					artileName:""
				},
				content: "",
				editorOption:{},
				arr:[],
				zanNum:0
			}
		},
		components: {
			quillEditor
		},
		mounted(){
			this.$store.dispatch("getClass")
			.then(res=>{
//				console.log(res)
				this.arr=res.data
			})
		},
		methods: {
			publish() {
//				console.log(this.form,this.content)
				this.$store.dispatch("createArticle",{
					article:{
						artileTitle:this.form.artileTitle,
						content:this.content,
						articleClass:this.form.arrileClassify,
						artileName:this.form.artileName,
						zanNum:this.zanNum
					}
				})
				.then(res=>{
					console.log(res.data)
				})
			},
			onEditorChange(e){
				this.content=e.html;
				console.log(e.html)
			}
			
		}
	}
</script>

<style scoped="scoped">
	el-container{
		height: 800px;
	}
	header{
		font-size: 30px;
	}
</style>