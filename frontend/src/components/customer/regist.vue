<template>
	<div class="content">
		<div class="panel">
			<h1>注册</h1>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
				<el-form-item prop="name">
					<el-input v-model="ruleForm.name" placeholder="请输入昵称" autocomplate="off" @blur="fname"></el-input>
				</el-form-item>
				<el-form-item prop="pass">
					<el-input v-model="ruleForm.pass" type="password" placeholder="请输入密码" autocomplate="off"></el-input>
				</el-form-item>
				<el-form-item prop="checkPass">
					<el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
				</el-form-item>
				<el-button type="success" round @click="submitForm('ruleForm')">确认注册</el-button>

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
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				ruleForm: {
					name: '',
					pass: "",
					checkPass: ""
				},
				arr:[],
				rules: {
					name: [
						{ required: true, message: '请输入昵称', trigger: 'blur' },
						{ min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
					],
					pass: [
						{ validator: validatePass, trigger: 'blur' }
					],
					checkPass: [
						{ validator: validatePass2, trigger: 'blur' }
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
			
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
				this.$store.dispatch("zhuCe",this.ruleForm)
				.then(res=>{
					console.log(res.data)
					if(res.data.sta=="success"){
						console.log(this.$router)
						this.$router.push({path:"login"})
					}
				})
			},
			fname(){
				for(var i=0; i<this.arr.length; i++){
//				console.log(this.arr[i].name)
					if(this.ruleForm.name==this.arr[i].name){
						alert("用户名已被注册");
						break;
					}
				}
			}
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