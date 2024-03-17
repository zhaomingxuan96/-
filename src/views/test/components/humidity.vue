<template>
    <div>
        <div
            ref="main"
            style="width: 100%; height: 250%;"
        ></div>
    </div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts';
import { onMounted, reactive, ref, } from 'vue';
import axios from 'axios';

const main = ref()

onMounted(() => {
  init()
})
const init = () => {
  const lineList = reactive({
  h:<any>[21,42,35,56,25,44,56,22,37,35]
    //h:<any>['','','','','','','','','','']
})
  //setInterval会不停的调用函数，每5s调用一次
  setInterval(() => {
    //setTimeout只执行函数一次，自带清除定时器
        setTimeout(() => {
            axios.get('https://710q08p089.goho.co/data').then(res => {
                let nowTime = new Date().toLocaleTimeString().replace(/^\D*/, '');
                time.shift()
                time.push(nowTime)
                if (lineList.h.length > 10){
                  lineList.h.shift()
                  lineList.h.push(res.data.humidity)
                } else {
                  lineList.h.push(res.data.humidity)
                };
                console.log(lineList.h);
                mychart.setOption({
            xAxis: [
              {
                data: time
              }
            ],
            series: [
              {
                data: lineList.h
              }
            ]
          })   
            })
        }, 0)
       
        
    }, 2000)
console.log(lineList.h);

//时间
    const time = (function () { // 立即执行函数
          let now = new Date();  // 获得当前的时间
          let res = []; // 存放时间的数组
          let len = 10; // 要存几个时间？
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, '')); // 转换时间，大家可以打印出来看一下
            console.log(res);
            now = new Date(+now - 1000) // 延迟几秒存储一次？
          }
          return res;
        })();
  // 1通过dom初始化echarts 2ref虚拟化dom
  let mychart = echarts.init(main.value)
  // 数据源
  var option = {
          title: {
            text: '当前湿度',
            textStyle: {
              color: '#03e6e6',
             fontWeight: 'normal', // 修改字体粗细
              // fontSize: 16 // 修改字体大小normal
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            }
          },
          //工具包，包括
          toolbox: {
            feature: {
            saveAsImage: {},//下载图片
            dataView:{},//数据展示且可以修改
            restore:{},//重置
            //dataZoom:{},//缩小显示范围
            //切换折线图
            magicType:{
            type:['bar','line']
            }
            }
        },
        legend:{
              top:'7%',
              left:'center'
          },
          xAxis: {
            data: time, // 把时间组成的数组接过来，放在x轴上
            boundaryGap: true
          },
          yAxis: {
            type: 'value',
            interval:10, // 步长
            min:20, // 起始
            max:60 // 终止
          },
          series: [
            {
              data: lineList.h,
              //name: '湿度',
              type: 'line',
              color: '#1e7b7b' ,// 设置颜色为
              markPoint: {
                data: [
                  { type: 'max', name: '最大值' },
                  { type: 'min', name: '最小值' }
                ]
              },
              markLine: {
                data: [{ type: 'average', name: '平均值' }]
              }
            }
          ]
        }

        
  // 数据源给予
  mychart.setOption(option);
  window.addEventListener("resize", () => {
    mychart.resize()});
}

</script>
<style lang='scss' scoped>
</style>