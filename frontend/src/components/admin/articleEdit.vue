<template>
	<el-container>
		<el-header>管理面板>编辑文章</el-header>
		<el-form v-model="form">
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
		<el-button @click="edit" style="width: 100px;">确认修改</el-button>
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
					arrileClassify: ""
				},
				content: "",
				editorOption:{},
				arr:[],
				id:"",
			}
		},
		components: {
			quillEditor
		},
		mounted(){
			this.$store.dispatch("getClass")
			.then(res=>{
				this.arr=res.data
			});
			this.id=this.$route.query._id;
//			console.log(this.id)
			this.$store.dispatch("getArticleId",this.id)
			.then(res=>{
				console.log(res.data)
				this.obj=res.data
				this.form.artileTitle=res.data.artileTitle
				this.content=res.data.content
			})
		},
		methods: {
			
			edit() {
				this.id=this.$route.query._id;
				console.log(this.id)
				this.$store.dispatch("articleEdit",{
					articlEdit:{
						artileTitle:this.form.artileTitle,
						content:this.content,
						articleClass:this.form.arrileClassify,
						id:this.id
					},
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

<style>
	header{
		font-size: 30px;
	}
	
</style>