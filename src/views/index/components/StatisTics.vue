<template>
    <div>
        <!-- <div ref="main" style="width: auto; height: auto;"></div> -->
        <div ref="main" style="width: 100%; height: 180%;"></div>
    </div>
</template>
<script  setup lang="ts">
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
const main = ref();

onMounted(() => {
    //draw1();
    init()
});
const init = () => {

    // let departTotal = document.getElementById("departTotal") as HTMLElement;
    // departTotal.removeAttribute("_echarts_instance_");
    let myChart = echarts.init(main.value);
    // 其他操作
    let options = {
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
        ],
    };

    myChart.setOption(options);
    window.addEventListener("resize", () => {
        myChart.resize()
    });
}
</script>
<!-- <style lang="less" scoped>
// .p3 {
//     width: 100%;
//     height: auto;
//     // #departTotal {
//     //     margin: 10px 0px 0 0;
//     //     width: 350px;
//     //     height: auto;
//     // }
// }
</style> -->