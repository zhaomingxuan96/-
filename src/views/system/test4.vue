<template>
    <div class="container">
      <video class="video" poster="@/assets/login/1.jpg" loop autoplay muted>
        <source src="@/assets/login/Particles.mp4" />
      </video>
      <div class="left">
        <div class="chart0">
          <tempera-ture />
        </div>
        <div class="chart1">
          <humi-dity />
        </div>
        <div class="chart2">
          <!-- <pie-chart /> -->
        </div>
      </div>
      <div class="middle">
        <div class="content">
          <h1>桥梁智慧监测大屏</h1>
          <p>bridge & monitoring</p>
        </div>
        <!-- 其他组件 -->
      </div>
      <div class="right">
        <div class="chart1">
          <ScheduleChart />
        </div>
        <div class="chart2">
          <StatisTics />
        </div>
        <div class="chart3">
          <ScrollChart />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang='ts'>
  import HumiDity from "./components/humidity.vue";
  import TemperaTure from "./components/temperature.vue";
  import ScrollChart from "./components/ScrollChart.vue"
  import StatisTics from "./components/StatisTics.vue";
  import ScheduleChart from "./components/ScheduleChart.vue"
  import PieChart from "./components/PieChart.vue"
  </script>
  
  <style lang="scss" scoped>
  // 隐藏滚动条
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  
  ::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
  }
  
  .container {
    width: 100vw;
    height: 100vh;
    flex-direction: row;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(../../images/logo.png) no-repeat 0 0 / contain;
  
    video {
      position: absolute;
      /* Vertical and Horizontal center*/
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      object-fit: fill;
      z-index: -1;
    }
  }
  
  .left,
  .right {
    display: flex;
    flex-direction: column;
    padding: 10px;
   
  
    // background-color: #df1717;
  }
  
  .left {
    flex: 1;
    max-width: 25%;
    margin-top: 10vh;
  }
  
  .middle {
    flex: 1;
    max-width: 50%;
    //flex-direction: column;
    align-self: flex-start; // 垂直方向最上方对齐
    //display: flex; // 将容器设置为 flexbox 容器
    .content {
      align-self: flex-start; // 垂直方向最上方对齐
      text-align: center; // 水平居中文本
      h1 {
        font-size: 34px;
        color: rgb(125, 227, 235);
        margin: 2vh 0 0 0;
      }
      p {
        font-size: 18px;
        margin: 0 0 0 0;
        color: rgb(125, 227, 235);
      }
    }
  }
  .right {
    flex: 1;
    max-width: 25%;
    margin-top: 7vh;
    //align-self: flex-start; // 垂直方向最上方对齐
  }
  
  .chart1 {
    margin: 10px 0;
    height: 28vh;
    width:25vw;
    /* 自适应高度 */
    //margin-bottom: 10px;
    /* 占位 */
  }
  .chart2 {
    margin: 10px 0;
    height: 28vh;
    width:25vw;
    /* 自适应高度 */
    //margin-bottom: 10px;
    /* 占位 */
  }
  .chart3 {
    margin: 10px 0;
    height: 35vh;
    width:25vw;
    /* 自适应高度 */
    //margin-bottom: 10px;
    /* 占位 */
  }
  .chart0 {
    margin: 10px 0;
    height: 28vh;
    width:25vw;
    /* 自适应高度 */
    //margin-bottom: 10px;
    /* 占位 */
  }
  .chart1 {
    margin: 10px 0;
    height: 28vh;
    width:25vw;
    /* 自适应高度 */
    //margin-bottom: 10px;
    /* 占位 */
  }
  .chart3 {
    margin: 10px 0;
    height: 35vh;
    width:25vw;
    /* 自适应高度 */
    //margin-bottom: 10px;
    /* 占位 */
  }
  </style>