<template>
	<div class="times">{{ nowTime }}</div>
	<div class="charts">
		<el-row :gutter="2">
			<el-col :span="12">
				<humi-dity />
			</el-col>
			<el-col :span="12">
				<tempera-ture />
			</el-col>
			<!-- <el-col :span="4">
				<pie-chart />
			</el-col> -->
		</el-row>
	</div>
	<div>
		<el-row :gutter="2">
			<el-col :span="12">
				<h1 style="margin:1px ;">点击按钮开关小灯</h1>
				<button id="shiny-shadow" @click="onlight"><span>开灯</span></button>
				<button id="shiny-shadow" @click="offlight"><span>关灯</span></button>
			</el-col>
			<el-col :span="12">
				<h1 style="margin:1px ;">点击按钮开关蜂鸣器</h1>
				<button id="shiny-shadow" @click="onbeep"><span>打开</span></button>
				<button id="shiny-shadow" @click="offbeep"><span>关闭</span></button>
			</el-col>
		</el-row>
	</div>
</template>

<script setup lang='ts'>
//import PieChart from "./components/PieChart.vue";
import HumiDity from "./components/HumiDity.vue";
import TemperaTure from "./components/temperature.vue"
import axios from "axios";
import { ref, onMounted } from 'vue'
const nowTime = ref("")
onMounted(() => {
	setInterval(() => {
		nowTime.value = formateDate(new Date())
	})
});
const complement = function (value: any) {
	return value < 10 ? `0${value}` : value;
};

const formateDate = (date: any) => {
	const time = new Date(date);
	const year = time.getFullYear();
	const month = complement(time.getMonth() + 1);
	const day = complement(time.getDate());
	const hour = complement(time.getHours());
	const minute = complement(time.getMinutes());
	const second = complement(time.getSeconds());
	const week = '星期' + '日一二三四五六'.charAt(time.getDay());
	return `${year}年${month}月${day}日 ${week} ${hour}:${minute}:${second}`;
};


const onlight = () => {
	axios.post('https://710q08p089.goho.co/pin', 'light=On').then(res => {
		alert('亮了！亮了！！！！')
	}
	)
}

const offlight = () => {
	axios.post('https://710q08p089.goho.co/pin', 'light=Off').then(res => {
		alert('灭了！灭了！！！！')
	}
	)
}

const onbeep = () => {
	axios.post('https://710q08p089.goho.co/pin', 'beep=On').then(res => {
		//alert('亮了！亮了！！！！')
	}
	)
}

const offbeep = () => {
	axios.post('https://710q08p089.goho.co/pin', 'beep=Off').then(res => {
		//alert('灭了！灭了！！！！')
	}
	)
}

</script>
<style lang='scss' scoped>
.charts {
	width: 100%;
	height: 100%;
}

#shiny-shadow {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 3vh;
	background: #1c2541;
}

button {
	border: 10px solid white;
	background: transparent;
	text-transform: uppercase;
	color: rgb(245, 242, 242);
	padding: 15px 25px;
	outline: none;
	overflow: hidden;
	position: relative;
}

button:after {
	content: '';
	display: block;
	position: absolute;
	top: -36px;
	left: -100px;
	background: rgb(241, 137, 137);
	width: 50px;
	height: 125px;
	opacity: 20%;
	transform: rotate(-45deg);
}

button:hover:after {
	left: 20%;
	transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);
	-webkit-transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);
}

.times {
	width: 300px;
	height: 25px;
	text-align: center;
	line-height: 25px;
	border-radius: 50px;
	padding: 0 auto;
	margin: auto;
	background-color: rgb(202, 202, 90);
	background-color: rgb(151, 199, 231);
}
</style>
