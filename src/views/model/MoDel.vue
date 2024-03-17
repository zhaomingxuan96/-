<template>
  <div ref="webgl" class="canvas">
  </div>
</template>

<script>
import { renderer } from "./threejs/index.js";
export default {
  name: "model",
  created: function () {
    // this.$refs.webgl.appendChild(renderer.domElement);//不可以
    // Three.js渲染结果Canvas画布插入到body元素中
    // document.body.appendChild(renderer.domElement);//可以访问body
  },
  mounted: function () {
    this.$refs.webgl.appendChild(renderer.domElement);
    // // Three.js渲染结果Canvas画布插入到body元素中
    // document.body.appendChild(renderer.domElement);
  },
};

</script>
<style scoped>
.canvas{
  margin-top:0px;
  margin-left:0px;
  margin-bottom: 0px;
  margin-right: 0px;
  overflow: hidden;
}
</style>
