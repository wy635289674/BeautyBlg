<template>
	<div class="content">
		<div class="panel">
		<h1>登录</h1>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
				<el-form-item prop="name">
					<el-input v-model="ruleForm.name" placeholder="请输入昵称" autocomplate="off"></el-input>
				</el-form-item>
				<el-form-item prop="pass">
					<el-input v-model="ruleForm.pass" type="password" placeholder="请输入密码" autocomplate="off"></el-input>
				</el-form-item>
				<el-button type="success" round @click="submitForm()">确认登录</el-button>

			</el-form>
		</div>
	</div>
</template>

<script>
	export default {

		data() {
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					if(this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			
			return {
				ruleForm: {
					name: '',
					pass: "",
				},
				arr:[],
				rules: {
					name: [
						{ required: true, message: '请输入昵称', trigger: 'blur' },
						{ min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
					],
				}
			}
		},
		mounted(){
			this.$store.dispatch("getAuthors")
			.then(res=>{
				console.log(res.data)
				this.arr=res.data
			})
		},
		methods: {
			submitForm() {
				var flag=false
				for(var i=0; i<this.arr.length; i++){
//				console.log(this.arr[i].name)
					if(this.ruleForm.name==this.arr[i].name&&this.ruleForm.pass==this.arr[i].pass){
						flag=true
						break;
					}
				}
				if(flag){
					sessionStorage.setItem("name",this.ruleForm.name)
					alert("户名登录成功");
					this.$router.push("/")
				}else{
					alert("用户名或密码错误")
				}
			},
		}
	}
</script>

<style>
	#app {
		height: 100%;
	}
	
	.content {
		background-color: #eee;
		height: 100%;
		width: 100%;
		padding-top: 50px;
	}
	
	.panel {
		width: 300px;
		padding: 30px;
		margin: 0px auto;
		background-color: white;
	}
	
	.el-button {
		width: 100%;
	}
</style>