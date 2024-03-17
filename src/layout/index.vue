<template>
  <div class="layout">
    <el-container>
      <el-aside :style="'width:' + autoWidth">
        <logo-bar :collapsed="collapsed" />
        <menu-bar :collapsed="collapsed" />
      </el-aside>
      <el-container>
        <el-header>
          <el-row :gutter="24" style="width:100%; display: flex; align-items: center;">
            <!-- 侧边栏展开折叠按钮 -->
            <el-col :span="1">
              <el-icon style="font-size: 26px; margin-right: 15px;" @click="() => (collapsed = !collapsed)">
                <component :is="collapsed ? Expand : Fold" />
              </el-icon>
            </el-col>
            <!-- header业务 -->
            <el-col :span="23">
              <header-bar />
            </el-col>

          </el-row>
        </el-header>
        <el-main class="el-main">
          <!-- tabList -->
          <tab-bar />
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import LogoBar from './components/LogoBar/index.vue'
import MenuBar from './components/MenuBar/index.vue'
import AppMain from './components/AppMain/AppMain.vue'
import HeaderBar from './components/HeaderBar/index.vue'
import TabBar from "./components/TabBar/TabBar.vue";
import { Expand, Fold } from '@element-plus/icons-vue';
import { computed, onMounted, ref } from 'vue';
import { isMobile } from '../utils/isMobile'

const collapsed = ref<boolean>(false)
const autoWidth = computed(() => {
  if (collapsed.value && isMobile()) {
    return "0px"
  } else if (collapsed.value) {
    return "64px"
  } else {
    return "200px"
  }
})

console.log(isMobile());
</script>
  
<style lang="scss">
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
  .el-main {
    overflow: hidden;
  }

  .el-header {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #ffffff;
    color: var(--el-text-color-primary);
    text-align: center;
  }

  .el-footer {
    line-height: 60px;
  }

  .el-aside {
    background-color: $menuBg;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 0px;
    width: 200px;
    height: 100%;
    overflow: auto;
  }

  .el-aside::-webkit-scrollbar {
    width: 0px;
  }

  .el-aside::-webkit-scrollbar-thumb {
    background-color: $menuBg;
  }

  .el-aside::-webkit-scrollbar-track {
    background-color: $menuBg;
  }
  .el-aside::-webkit-scrollbar-track-piece:end {
  display: none;
}

}</style>