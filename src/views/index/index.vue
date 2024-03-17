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
      <div class="chart3" ref="chart3"></div>
    </div>
    <div class="middle">
      <div class="content">
        <h1>桥梁智慧监测大屏</h1>
        <p>bridge & monitoring</p>

      </div>
      <!-- 其他组件 -->
      <zzz />
    </div>
    <div class="right">
      <div class="chart1" ref="chart1"></div>
      <div class="chart2" ref="chart2"></div>
      <div class="chart3">
        <ScrollChart />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import HumiDity from "./components/humidity.vue";
import TemperaTure from "./components/temperature.vue";
import ScrollChart from "./components/ScrollChart.vue"
import { defineComponent, onMounted, ref } from 'vue';
import * as echarts from 'echarts';
import zzz from "../zzz/zzz.vue";

export default defineComponent({
  components: { TemperaTure, HumiDity, ScrollChart, zzz },
  setup() {
    const chart1 = ref(null);
    const chart2 = ref(null);
    const chart3 = ref(null);
    var myColor = [
      "#03e6e6",
    ];
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
          top: -4
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
              4, 5, 6, 7, 4, 2
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
              4, 5, 4, 5, 4, 2,
            ],
          },
        ]
      };
      const chart2Instance = initChart(chart2.value, chart2Option);
      const chart3Option = {
        //backgroundColor: transparent,
        title: {
          text: '构件生产',
          textStyle: {
            color: '#03e6e6',
            fontWeight: 'normal', // 修改字体粗细
          }
        },
        grid: {
          left: "11%",
          top: "12%",
          right: "0%",
          bottom: "8%",
          containLabel: true,
        },
        xAxis: [
          {
            show: false,
          },
        ],
        yAxis: [
          {
            axisTick: "none",
            axisLine: "none",
            offset: "27",
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "16",
              },
            },
            data: [
              "桥头搭板",
              "橡胶支座",
              "预制梁板",
              "桥墩承台",
              "桥面铺装",
              "附属结构",
              "在线测试",
            ],
          },
          {
            axisTick: "none",
            axisLine: "none",
            axisLabel: {
              textStyle: {
                color: "#03e6e6",
                fontSize: "16",
              },
            },
            data: ["", "", "", "", "", "", ""],
          },
          {
            name: "进度控制",
            nameGap: "50",
            nameTextStyle: {
              color: "#ffffff",
              fontSize: "16",
            },
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0)",
              },
            },
            data: [],
          },
        ],
        series: [
          {
            name: "条",
            type: "bar",
            yAxisIndex: 0,
            data: [4, 13, 25, 29, 38, 44, 50],
            label: {
              normal: {
                show: true,
                position: "right",
                textStyle: {
                  color: "#ffffff",
                  fontSize: "12",
                },
              },
            },
            barWidth: 5,
            itemStyle: {
              normal: {
                color: function (params: { dataIndex: number; }) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
              },
            },
            z: 2,
          },
          {
            name: "白框",
            type: "bar",
            yAxisIndex: 1,
            barGap: "-100%",
            data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 8,
            itemStyle: {
              normal: {
                color: "#0e2147",
                barBorderRadius: 5,
              },
            },
            z: 1,
          },
          {
            name: "外圆",
            type: "scatter",
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 13,
            itemStyle: {
              normal: {
                color: function (params: { dataIndex: number; }) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
                opacity: 1,
              },
            },
            z: 2,
          },
        ],
      }
      const chart3Instance = initChart(chart3.value, chart3Option)
      window.addEventListener('resize', () => {
        resizeChart(chart1Instance);
        resizeChart(chart2Instance);
        resizeChart(chart3Instance);
      });
    });

    return {
      chart1,
      chart2,
      chart3
    };
  },
});
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
  //justify-content: center;
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
  overflow: hidden;
  //flex-direction: column;
  align-self: flex-start; // 垂直方向最上方对齐
  //display: flex; // 将容器设置为 flexbox 容器
  flex-direction: column;
  /* 将父元素设置为flex容器 */
  align-items: center;

  /* 设置垂直居中对齐 */
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
  height: 30vh;
  margin-top: 30px;
  margin-bottom: 10px;
  /* 自适应高度 */
  //margin-bottom: 10px;
  /* 占位 */
}

.chart2 {
  height: 30vh;
  /* 自适应高度 */
  //margin-bottom: 10px;
  /* 占位 */
}

.chart3 {
  margin: 10px 0;
  height: 35vh;
  width: 25vw;
  /* 自适应高度 */
  //margin-bottom: 10px;
  /* 占位 */
}

.chart0 {
  margin-top: 0px;
  height: 28vh;
  width: 25vw;
  /* 自适应高度 */
  //margin-bottom: 10px;
  /* 占位 */
}
</style>