<template>
	<h1>电机控制</h1>
	<div>
		<button id="shiny-shadow" @click="sendCommand"><span>正转</span></button>
		<button id="shiny-shadow" @click="sendCommand2"><span>反转</span></button>
		<button id="shiny-shadow" @click="sendCommand3"><span>慢停</span></button>
		<button id="shiny-shadow" @click="sendCommand4"><span>急停</span></button>
  </div>
<h1>页面跳转</h1>
  <div><button @click="zzz">tiaozhuan</button></div>
</template>

<script setup lang='ts'>
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter()
const zzz=()=>{
  router.push({path:'/user'})
}
const sendCommand = () => {
	axios.post('https://710q08p089.goho.co/pin',  'pinNum=on').then(res => {
		console.log(res.data);
	}
	)
}

const sendCommand2 = () => {
	axios.post('https://710q08p089.goho.co/pin',  'pinNum=oon').then(res => {
		console.log(res.data);
	}
	)
}

const sendCommand3 = () => {
	axios.post('https://710q08p089.goho.co/pin',  'pinNum=ooon').then(res => {
		console.log(res.data);
	}
	)
}

const sendCommand4 = () => {
	axios.post('https://710q08p089.goho.co/pin',  'pinNum=oooon').then(res => {
		console.log(res.data);
	}
	)
}

</script>
