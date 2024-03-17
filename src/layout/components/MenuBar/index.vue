<template>
  <el-menu default-active="2" active-text-color="#409EFF" text-color="#fff" class="el-menu" :collapse="collapsed">
    <menu-item :menus="menus"></menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import MenuItem from './MenuItem.vue'

defineProps({
  collapsed: {
    type: Boolean
  }
})

const menus = reactive([
  {
    path: '/',
    redirect: '/workbench',
    name: 'workbench',
    meta: {
      title: '工作台',
      icon: 'Grid',
    },
    children: [
      {
        path: 'workbench',
        name: 'workbench',
        component: () => import('@/views/workbench/workbench.vue'),
        meta: {
          title: '工作台',
        },
      },
    ],
  },
  {
    path: '/index',
    //redirect: '/index/index',//重定向是定向到children中的页面
    name: 'Index',
    component: () => import('@/views/index/index.vue'),
    meta: {
      title: '数据大屏',//侧边栏名称
      icon: 'house',//侧边栏图标
    },
    //children是主要的页面（除去侧边栏和上边栏的那部分区域）
  },
  {
    path: '/files',
    name: 'files',
    meta: {
      title: '文件管理',
      icon: 'MessageBox',
    },
    children: [
      {
        path: 'file',
        name: 'file',
        component: () => import('@/views/file/file.vue'),
        meta: {
          title: '文件列表',
          icon: 'Files',
        },
      },
      {
        path: 'excelFile',
        name: 'excelFile',
        component: () => import('@/views/file/excelFile.vue'),
        meta: {
          title: 'excel录入(下拉)',
          icon: 'Tickets',

        },
      },
      {
        path: 'excelFileinput',
        name: 'excelFileinput',
        component: () => import('@/views/file/excelFileinput.vue'),
        meta: {
          title: 'excel录入(输入)',
          icon: 'DocumentRemove',
        },
      },
    ],
  },
  {
    path: '/user',
    redirect: '/user',
    name: 'User',

    meta: {
      title: '用户管理',
      affix: true,
      icon: 'UserFilled',
    },
    children: [
      {
        path: 'manger',
        name: 'UserManger',
        component: () => import('@/views/user/User.vue'),
        meta: {
          title: '用户管理',
          icon: 'UserFilled',

        },
      },
    ],
  }, {
    path: '/model',
    redirect: '/model',
    name: 'model',

    meta: {
      title: '模型展示',
      icon: 'OfficeBuilding',
    },
    children: [
      {
        path: 'model',
        name: 'model',
        component: () => import('@/views/model/model.vue'),
        meta: {
          title: '模型展示',
          icon: 'OfficeBuilding',

        },
      },
    ],
  },
  {
    path: '/test',
    redirect: '/test/test',
    name: 'test',
    meta: {
      title: 'test',
      icon: 'LocationInformation',
    },
    children: [
      {
        path: 'test',
        name: 'test',
        component: () => import('@/views/test/test.vue'),
        meta: {
          title: 'test',
          icon: 'LocationInformation',

        },
      },
    ],
  },
  {
    path: '/environmental',
    redirect: '/environmental/environmental',
    name: 'environmental',
    meta: {
      title: '环境温湿度',
      icon: 'Sunny',
    },
    children: [
      {
        path: 'environmental',
        name: 'environmental',
        component: () => import('@/views/environmental/environmental.vue'),
        meta: {
          title: '环境温湿度',
          icon: 'LocationInformation',

        },
      },
    ],
  },
  {
    path: '/system',
    name: 'system',

    meta: {
      title: 'system',
      icon: 'Wallet',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'account',
        name: 'account',
        component: () => import('@/views/system/Account.vue'),
        meta: {
          title: 'account',
          icon: 'User',
          roles: ['editor']
        }

      },
      {
        path: 'group',
        name: 'group',
        component: () => import('@/views/system/Group.vue'),
        meta: {
          title: 'group',
          icon: 'Refrigerator',
          roles: ['admin']
        }
      }, {
        path: 'task',
        name: 'task',
        component: () => import('@/views/system/Task.vue'),
        meta: {
          title: 'task',
          icon: 'Clock',
          roles: ['editor']
        }

      },
      {
        path: 'Setting',
        name: 'Setting',
        component: () => import('@/views/system/Setting.vue'),
        meta: {
          title: '系统设置',
          icon: 'Setting',
          roles: ['admin']
        }
      }
    ]

  }
])

</script>

<style lang="scss">
.el-menu {
  background-color: $menuBg;
  height: auto;
  overflow: auto;
  border: none;

  .el-sub-menu {
    .el-menu-item {
      background-color: $subMenuBg
    }
  }
}

.el-menu::-webkit-scrollbar {
  width: 0px;
}

.el-menu::-webkit-scrollbar-thumb {
  background-color: #ffffff;
}

.el-menu::-webkit-scrollbar-track {
  background-color: $menuBg;
}
</style>