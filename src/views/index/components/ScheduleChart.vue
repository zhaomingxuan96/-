<template>
    <div>
        <!-- <div ref="main" style="width: auto; height: auto;"></div> -->
        <div ref="main1" style="width: 100%; height: 180%;"></div>
    </div>
</template>
<script  setup lang="ts">
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
const main1 = ref();

onMounted(() => {
    //draw1();
    init()
});

const init = () => {
    let myChart = echarts.init(main1.value);
    // 其他操作

    let options = {
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
        ],
    };

    myChart.setOption(options);
    window.addEventListener("resize", () => {
        myChart.resize()
    });
}

</script>
