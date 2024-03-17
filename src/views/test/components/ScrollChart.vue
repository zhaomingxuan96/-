<template>
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
</template>

<script setup lang="ts">
import { ref} from "vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
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
</style>