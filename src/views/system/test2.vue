
<template>
  <div class="container">
      <div class="lll">
          <div class="chart1" ref="chart1"></div>
          <div class="chart2" ref="chart2"></div>
          <div class="chart3"><h1>1111</h1></div>
      </div>
      <div class="ppp">
      </div>
      <div class="ooo">
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import * as echarts from 'echarts';

export default defineComponent({
  setup() {
    const chart1 = ref(null);
    const chart2 = ref(null);

    const initChart = (chartRef: any, option: any) => {
      const chart = echarts.init(chartRef);
      chart.setOption(option);
      return chart;
    };

    const resizeChart = (chart: any) => {
      chart.resize();
    };

    onMounted(() => {
      const chart1Option = {
          grid: {
                  left: "0",
                  top: "30",
                  right: "0",
                  bottom: "10",
                  containLabel: true,
              },
              title: {
                  text: '构件施工进度',
                  textStyle: {
                      color: '#03e6e6',
                      fontWeight: 'normal', // 修改字体粗细
                  },
                  top: -4
              },
              legend: {
                  top: 0,
                  left: 'center',
                  textStyle: {
                      color: "#fff",
                      fontSize: "14",
                  },
                  itemWidth: 10, // 设置宽度
                  itemHeight: 10, // 设置高度

              },

              tooltip: {
                  trigger: "axis",
                  axisPointer: {
                      // 坐标轴指示器，坐标轴触发有效
                      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                  },
              },

              xAxis: {
                  type: "category",
                  data: ["桥墩承台", "桥墩墩身", "桥墩墩帽", "桥垫石"],
                  axisTick: {
                      show: true,
                  },

                  axisLine: {
                      show: true,
                      lineStyle: {
                          color: "rgba(255,255,255,.1)",
                          width: 1,
                          type: "dotted",
                      },
                  },
                  axisLabel: {
                      //X轴文字
                      fontSize: 12,
                      color: "#fff",
                  },
              },
              yAxis: {
                  type: "value",
                  splitLine: {
                      //分割线
                      show: true,
                      lineStyle: {
                          color: "rgba(255,255,255,.1)",
                          width: 1,
                          type: "dotted",
                      },
                  },

                  axisLabel: {
                      //Y轴刻度值
                      formatter: "",
                      fontSize: 12,
                      color: "#fff",
                  },
                  axisLine: {
                      //---坐标轴 轴线
                      //show: true, //---是否显示
                  },
              },
              series: [
                  {
                      name: "已完成",
                      type: "bar",
                      data: [3, 7, 4, 4],
                      barWidth: 15,
                      barGap: 1,
                      itemStyle: {
                          borderRadius: 50,
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                              {
                                  offset: 0,
                                  color: "#397ace",
                              },
                              {
                                  offset: 1,
                                  color: "#26d4cd",
                              },
                          ]),
                      },
                  },
                  {
                      name: "未完成",
                      type: "bar",
                      data: [6, 2, 5, 4],
                      barWidth: 15, //柱图宽度
                      itemStyle: {
                          //设置颜色的渐变
                          borderRadius: 50,
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                              {
                                  offset: 0,
                                  color: "#08dd9d",
                              },
                              {
                                  offset: 1,
                                  color: "#26d4cc",
                              },
                          ]),
                      },
                  },
              ]
      };
      const chart1Instance = initChart(chart1.value, chart1Option);

      const chart2Option = {
          tooltip: {
          trigger: "axis",
          axisPointer: {
              lineStyle: {
                  color: "#dddc6b",
              },
          },
      },
      legend: {
          top: "0%",
          data: ["A", "B"],
          textStyle: {
              color: "rgba(255,255,255,.5)",
              fontSize: "16",
          },
      },
      grid: {
          left: "10",
          top: "30",
          right: "10",
          bottom: "10",
          containLabel: true,
      },
      title: {
      text: '工数统计',
      textStyle: {
          color: '#03e6e6',
          fontWeight: 'normal', // 修改字体粗细
      },
      top:-4
  },
      xAxis: [
          {
              type: "category",
              boundaryGap: false,
              axisLabel: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: 12,
              },
              axisLine: {
                  lineStyle: {
                      color: "rgba(255,255,255,.2)",
                  },
              },

              data: [
                  "01",
                  "02",
                  "03",
                  "04",
                  "05",
                  "06",
                  "07",
                  "08",
                  "09",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23",
                  "24",
                  "25",
                  "26",
                  "27",
                  "28",
                  "29",
                  "30"
              ],
          },
          {
              axisPointer: { show: false },
              axisLine: { show: false },
              position: "bottom",
              offset: 20,
          },
      ],

      yAxis: [
          {
              type: "value",
              axisTick: { show: false },
              axisLine: {
                  lineStyle: {
                      color: "rgba(255,255,255,.1)",
                  },
              },
              axisLabel: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: 12,
              },

              splitLine: {
                  lineStyle: {
                      color: "rgba(255,255,255,.1)",
                  },
              },
          },
      ],
      series: [
          {
              name: "A",
              type: "line",
              smooth: true,
              symbol: "circle",
              symbolSize: 5,
              showSymbol: false,
              lineStyle: {
                  color: "#0184d5",
                  width: 2,
              },
              areaStyle: {
                  color: new echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                          {
                              offset: 0,
                              color: "rgba(1, 132, 213, 0.4)",
                          },
                          {
                              offset: 0.8,
                              color: "rgba(1, 132, 213, 0.1)",
                          },
                      ],
                      false
                  ),
                  shadowColor: "rgba(0, 0, 0, 0.1)",
              },
              itemStyle: {
                  color: "#0184d5",
                  borderColor: "rgba(221, 220, 107, .1)",
                  borderWidth: 12,
              },
              data: [
                  3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4, 3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2,
                  4,5,6,7,4,2
              ],
          },
          {
              name: "B",
              type: "line",
              smooth: true,
              symbol: "circle",
              symbolSize: 5,
              showSymbol: false,
              lineStyle: {
                  color: "#00d887",
                  width: 2,
              },
              areaStyle: {
                  color: new echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                          {
                              offset: 0,
                              color: "rgba(0, 216, 135, 0.4)",
                          },
                          {
                              offset: 0.8,
                              color: "rgba(0, 216, 135, 0.1)",
                          },
                      ],
                      false
                  ),
                  shadowColor: "rgba(0, 0, 0, 0.1)",
              },
              itemStyle: {
                  color: "#00d887",
                  borderColor: "rgba(221, 220, 107, .1)",
                  borderWidth: 12,
              },
              data: [
                  5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1,
                  4,5,4,5,4,2,
              ],
          },
      ]
      };
      const chart2Instance = initChart(chart2.value, chart2Option);

      window.addEventListener('resize', () => {
        resizeChart(chart1Instance);
        resizeChart(chart2Instance);
      });
    });

    return {
      chart1,
      chart2,
    };
  },
});
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: black;
}

.lll {
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 25%;
}
.ppp {
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 50%;
}
.ooo {
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 25%;
}
.chart1 {
  height: 33%;
}

.chart2 {
  height: 33%;
}

.chart3 {
  height: 33%;
}</style>
