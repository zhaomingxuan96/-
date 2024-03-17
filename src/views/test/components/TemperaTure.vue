<template>
  <div>
    <div ref="main"
      style="width: 100%; height: 300%;"></div>
  </div>
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
</template>

<script setup lang='ts'>
import * as echarts from 'echarts'
import { onMounted, reactive, ref, watch } from 'vue';
import axios from 'axios'
const onlight = () => {
	axios.post('https://710q08p089.goho.co/pin', 'light=On').then(res => {
		
	}
	)
}

const offlight = () => {
	axios.post('https://710q08p089.goho.co/pin', 'light=Off').then(res => {
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
const main = ref()
//生命周期函数，用于初始化
onMounted(() => {
  init()
})
const init = () => {
  //定义响应式数据，并且提前在数组中写入10个0元素用于占位
  const lineList = reactive({
    //t: <any>['', '', '', '', '', '', '', '', '', '']
      t: <any>[30, 29, 28, 34, 25, 32, 26.3, 28.3, 25.2, 29]
  })
  console.log(lineList.t);
  //监听数组中所有数据，如果所有数据都大于30则亮灯

  //setInterval会不停的调用函数，每多少毫秒调用一次
  setInterval(() => {
    //setTimeout只执行函数一次，自带清除定时器
    setTimeout(() => {
      let nowTime = new Date().toLocaleTimeString().replace(/^\D*/, '');
      time.shift()//shift删除数组里第一个时间元素
      time.push(nowTime)//push增加最新的时间元素到数组的最后一个位置
      axios.get('https://710q08p089.goho.co/data').then(res => {
        console.log(res.data.temperature);
        //判断温度>30，亮灯，打开蜂鸣器。如果不是，不亮灯，不开蜂鸣器
        if(res.data.temperature>30){
          onlight()
          onbeep()
        }else{offlight()
        offbeep()}
        //当数组长度大于10的时候，删除数组中第一个元素，并且把1个新请求的temperature增加到最后一个位置,否则继续增加数组元素
        if (lineList.t.length > 10) {
          lineList.t.shift()
          lineList.t.push(res.data.temperature)
        } else {
          lineList.t.push(res.data.temperature)
        };
        
        //定义x-y轴数据
        mychart.setOption({
          xAxis: [
            {
              data: time
            }
          ],
          series: [
            {
              data: lineList.t
            }
          ]
        })
      }
      )
    }, 0)
  }, 2000)//1000毫秒调用一次
  console.log(lineList.t);

  //时间
  const time = (function () { // 立即执行函数
    let now = new Date();  // 获得当前的时间
    let res = []; // 存放时间的数组
    let len = 10; // 要存几个时间？
    while (len--) {
      //unshift是把新添加的元素放在数组第一位
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
      text: '当前温度',
      textStyle: {
        color: '#03e6e6',
        fontWeight: 'normal', // 修改字体粗细
      }
    },
    //提示框
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
        dataView: {},//数据展示且可以修改
        restore: {},//重置
        dataZoom: {},//缩小显示范围
        //切换折线图
        magicType: {
          type: ['bar', 'line']
        }
      }
    },
    //图例
    legend: {
      top: '7%',
      left: 'center'
    },
    xAxis: {
      data: time, // 把时间组成的数组接过来，放在x轴上
      boundaryGap: true
    },
    yAxis: {
      type: 'value',
      interval: 2, // 步长
      min: 25, // 起始
      max: 35 // 终止
    },
    series: [
      {
        data: lineList.t,
        type: 'line',
        //name: '温度',
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
<style lang='scss' scoped></style>