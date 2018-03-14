<template>
	<div id="app">
		<!--<img src="./assets/logo.png">-->
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}

</script>

<style>
	html,body{
		width: 100%;
		height:100%;
	}
	* {
		margin: 0;
		padding: 0;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	a{
		text-decoration: none;
		color:black;
	}
	img{
		width: 80px;
		height: 60px;
	}
	p{
		margin: 5px;
	}
</style>