<!--  -->
<template>
  <div>
    <el-breadcrumb>
      <el-breadcrumb-item v-for="(item, index) in breadcrumb " :key="index">
        {{ item.meta.title }}

      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang='ts'>
import { Ref, ref, watch } from 'vue';
import { useRoute, RouteLocationMatched } from 'vue-router';
const route = useRoute()
const breadcrumb: Ref<RouteLocationMatched[]> = ref([])
const getBreadCrumb = () => {
  console.log(route.matched);
  
  //过滤路由信息，把不符合的过滤掉，过滤条件是：得到的matched里的元素item里必须要有meta，和meta.title和children.length长度不等于1，不符合的都被过滤掉
  let matched = route.matched.filter((item) => item.meta && item.meta.title && item.children.length !== 1)
  //item.children.length !== 1意思是长度不等于1，
  //拿到第一条数据
  const frist = matched[0]
  console.log(matched);
  
  //判断
  //RouteLocationMatched是matched的数据类型
  if (frist.path !== '/index') {
    matched = [{ path: '/index', meta: { title: '首页' } } as any].concat(matched)
    //封装首页为面包头
    // 该代码是将一个对象 {path:'/index',meta:{title:'首页'}} 添加到数组 matched 的开头，并返回新的数组。
    // 具体来说，该代码使用了 concat() 方法，将数组 [ {path:'/index',meta:{title:'首页'}} ] 和数组 matched 进行连接，生成一个新的数组，并将其赋值给 matched。由于 concat() 方法不会改变原数组，因此原数组 matched 保持不变。
    // 需要注意的是，由于 {path:'/index',meta:{title:'首页'}} 对象使用了 as any 进行了类型断言，因此在使用该对象时需要确保其属性类型的正确性
  }
  breadcrumb.value = matched
}
getBreadCrumb()
//监控路由，如果路由发生变化，那么面包屑数据变
watch(() => route.path, () => {
  getBreadCrumb()
})

</script>
<style lang='scss' scoped></style>