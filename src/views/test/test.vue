<template>
	<video class="video" poster="@/assets/login/1.jpg" loop autoplay muted>
		<source src="@/assets/login/Particles.mp4" />
	</video>
	<div class="viewport">
		<div class="aaaa"></div>
		<div class="column">
			<tempera-ture />
			<humi-dity />
			<PieChart></PieChart>
		</div>
		<div class="column1">
			<h1>
				桥梁智慧监测大屏
			</h1>
			<p>
				bridge & monitoring
			</p>
			<!-- <mo-del /> -->
			<zzz />
		</div>
		<div class="column2">
			<statis-tics />
			<ScrollChart />
		</div>
		<div class="bbbb"></div>
	</div>
</template>

<script setup lang='ts'>
import HumiDity from "./components/HumiDity.vue";
import TemperaTure from "./components/temperature.vue";
import StatisTics from "./components/StatisTics.vue";
import ScrollChart from "./components/ScrollChart.vue";
import zzz from "../zzz/zzz.vue";
import PieChart from "./components/PieChart.vue";


</script>
<style lang="less" scoped>
@import url("./index.less");
</style>
