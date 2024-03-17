<!--  -->
<template>
  <template v-for="menu in menus" :key="menu.path">
   <el-sub-menu v-if="menu.children && menu.children.length >1 " :index="menu.path">
     <template #title>
       <el-icon>
         <component :is="menu.meta.icon" />
       </el-icon>
       <span>{{menu.meta.title}}</span>
     </template>
     <menu-item :menus="menu.children"></menu-item>
   </el-sub-menu>
   <!-- index绑定索引，索引要独一无二 -->
   <el-menu-item v-else @click="toPath(menu.name)" :index="menu.path">
     <el-icon>
       <component :is="menu.meta.icon" />
     </el-icon>
      <span>{{menu.meta.title}}</span>
   </el-menu-item>
 </template>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';


 defineProps(['menus'])
 const router = useRouter()
 const toPath = (item: string) => {
  if (item == 'Index') {
    window.open('/#/index'); // 在新的浏览器标签页中打开链接
  } else {
    router.push({ name: item }); // 在当前路由中跳转到指定路由
  }
};
</script>
<style lang='scss' scoped>
</style>