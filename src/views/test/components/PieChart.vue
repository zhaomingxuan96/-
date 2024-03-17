<!--  -->
<template>
    <div>
        <div
            ref="main"
            style="width: 100%; height: 300%; margin: 0px 0; border:0px solid #333;overflow: hidden;"
        ></div>
    </div>
  </template>
  
  <script setup lang='ts'>
  import * as echarts from 'echarts'
  import { onMounted, ref, } from 'vue';
  import axios from 'axios'
  
  const main = ref()
  const data =ref([])
  onMounted(()=>{
    init()
  })
  //axios.get('/api/files');
  const init= async ()=>{
      await axios.get('/api/pie').then(res=>{
        console.log(res);
        
          data.value = res.data
      })
    // 1通过dom初始化echarts 2ref虚拟化dom
    let mychart =echarts.init(main.value)
    // 数据源
    var option = {
          title:{
              text:'成本占比',
              textStyle: {
                            color: '#FFFFFF' // 将颜色设置为白色
                        },
              x:'center',
          },
          tooltip:{
              trigger:'item'
          },
          legend:{
              top:'10%',
              left:'center',
              textStyle: {
          color: '#FFFFFF' // 将字体颜色设置为白色
        }
          },
          series:[
              {
                  name:'数量',
                  type:'pie',
                  radius:['00%','60%'],
                  itemStyle:{
                      borderRadius:1,
                      borderColor:'#fff',
                      borderWidth:1,
                     
                  },
                  label:{
                      show:false,
                      position:'center'
                  },
                  emphasis:{
                      label:{
                          show:true,
                          fontSize:'40',
                          fontWeight:'bold'
                      }
                  },
                  data:data.value
              }
          ]
    };
  
    // 数据源给予
    mychart.setOption(option)
  }
  
  </script>
  <style lang='scss' scoped>
  </style>