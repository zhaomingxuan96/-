<template>
  <div style="width:85vw;height: 85vh;;background-color: #140303;">
    <div class="bototm">
                  <div class="b2">
                      <div class="bg1"></div>
                      <div class="bg2"></div>
                      <div class="dec">{{ currentNumber }}</div>
                      <div class="tag">PM2.5</div>
                  </div>
                  <div class="b5">
                      <div class="bg"></div>
                      <div class="dec">{{ currentNumber1 }}m/s</div>
                      <div class="tag">风速</div>
                  </div>
              </div>
        <div class="p1">
          <p class="title">安全检查</p>
          <div class="list">
            <div>时间</div>
            <div>工区</div>
            <div>是否合格</div>
            <div>负责人</div>
          </div>
          <vue3-seamless-scroll
            :list="attendData"
            :step="1"
            :singleHeight="30"
            hover
            class="temper-scroll"
          >
            <div
              class="scroll-item"
              v-for="(item, index) in attendData"
              :key="index"
            >
              <span>{{ item.time }}</span>
              <span>{{ item.name }}</span>
              <span>{{ item.ok }}</span>
              <span>{{ item.depart }}</span>
             
            </div>
          </vue3-seamless-scroll>
        </div>
      </div>
  </template>
  
  <script setup lang="ts">
  import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
  import { ref, onMounted } from 'vue'
  
  const numbers = ref([27, 29, 26, 28, 28, 29, 29, 29, 29, 29, 30, 30, 30, 21, 31, 29, 35, 35, 35, 35, 35])
  const numbers1 = ref([0.2, 0.3, 0.3, 0.3, 0.3, 0.4, 0.2, 0.4, 0.4, 0.2, 0.2, 1.0, 1.0, 1.1, 1.1, 1.1, 1.1, 1.1, 1.0, 0.2])
  const currentIndex = ref(0)
  const currentIndex1 = ref(0)
  const currentNumber = ref(0)
  const currentNumber1 = ref(0)
  
  onMounted(() => {
      setInterval(() => {
          currentIndex.value = (currentIndex.value + 1) % numbers.value.length
          currentNumber.value = numbers.value[currentIndex.value]
          currentIndex1.value = (currentIndex1.value + 1) % numbers1.value.length
          currentNumber1.value = numbers1.value[currentIndex1.value]
  
      }, 1000)
  })
  
  // 模拟数据
  let attendData = ref([
    { name: "A1", depart: "张飞",ok:"是",time: "2023.01.21" },
    { name: "B1", depart: "李白",ok:"是",time: "2023.01.30" },
    { name: "C1", depart: "玄德",ok:"是",time: "2023.02.02" },
    { name: "D1", depart: "云长",ok:"是",time: "2023.05.30" },
    { name: "E1", depart: "杜甫",ok:"是",time: "2023.11.25" },
    { name: "F1", depart: "刘备",ok:"是",time: "2023.08.16" },
  ]);
  
  </script>
  <style lang="less" scoped>
  .p1 {
      width: 29vw;
      height: 300px;
      //display: flex;
      // flex-direction: column;
    position: absolute;
  //   width: 524px;
  //   height: 300px;
  //   top:0;
    .title{
      font-size: 18px;
      margin-left: 20px;
      top:0 0 0 0;
      color: #03e6e6;
    }
    .list{
      width: 400px;
      height: 35px;
      margin: 30px auto 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: rgba(20, 48, 107, 0.5);
      div {
        color: #03e6e6;
        text-align: center;
      }
      div:nth-of-type(1){
        width: 170px;
      }
      div:nth-of-type(2){
        width: 130px;
        
      }
      div:nth-of-type(3){
        width: 100px;
      }
      div:nth-of-type(4){
        width: 110px;
      }
    }
  }
  .temper-scroll {
    height: 150px;
    width: 350px;
    margin: 30px auto;
    overflow: hidden;
    .scroll-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 3px 0;
      font-size: 18px;
      color: rgb(116, 190, 156);
    }
  }
  .bototm {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
  }
  .b2,.b5{
    position: relative;
  }
  .bototm {
    .b2{
      padding-top: 30px;
      position: relative;
      //transform: translatex(30px);
      .bg1{
        width: 105px;
        height: 105px;
        background-image: url(../../assets/images/cricle4.png);
        margin: 0 0 0 15px;
        animation: roate1 8s infinite linear;
        -webkit-animation: roate1 8s infinite linear;
        position: absolute;
      }
      .bg2{
        width: 89px;
        height: 92px;
        background-image: url(../../assets/images/cricle3.png);
        margin: 6px 0 0 22px;
        animation: roate2 8s infinite linear;
        -webkit-animation: roate2 8s infinite linear;
        position: absolute;
      }
      .tag{
        margin-top: 120px;
      }
    }
    .b5{
      transform: translatex(-50px);
      .bg {
        width: 104px;
        height: 104px;
        background-image: url(../../assets/images/cricle5.png);
        margin: 30px auto 15px auto;
        animation: roate2 8s infinite linear;
        -webkit-animation: roate2 8s infinite linear;
      }
    }
    .tag {
      width: 144px;
      height: 40px;
      background-image: url(../../assets/images/tag2.png);
      line-height: 30px;
      font-size: 18px;
      text-align: center;
      color: aliceblue;
    }
   .b2,.b5{
      .dec{
        position: absolute;
        transform: translateX(-50%);
        font-size: 28px;
        font-weight: 600;
      }
    }
    .b2{
      .dec{
        top: 32%;
        color: aliceblue;
        left: 45%;
      }
    }
    .b5{
      .dec{
        color: aliceblue;
        top: 32%;
        left: 50%;
      }
    }
  }
  </style>