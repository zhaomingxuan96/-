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
<style lang="scss" scoped>
.p1 {
  width: 100%;
  height: 150px;
  margin-left: 8px;
  //padding: 30px;
  //flex-direction: column;
  //object-fit: fill;

  .title {
    font-size: 18px;
    color: #03e6e6;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 10px;
  }

  .list {
     width: 100%;
     height: auto;
    display: flex;
    background-color: rgba(20, 48, 107, 0.5);

    div {
      color: #03e6e6;
      text-align: center;

      &:nth-of-type(1) {
        width: 30%;
        margin-left: -3%;
      }

      &:nth-of-type(2) {
        width: 25%;
        margin-left: 3%;
      }

      &:nth-of-type(3) {
        width: 20%;
        margin-left: -2%;
      }

      &:nth-of-type(4) {
        width: 25%;
      }
    }
  }
}

.temper-scroll {
  height: 200px;
  width: 90%;
  overflow: hidden;

  .scroll-item {
    display: flex;
    //align-items: center;
    justify-content: space-between;
    padding: 3px 0;
    font-size: 18px;
    color: rgb(116, 190, 156);
  }
}
</style>