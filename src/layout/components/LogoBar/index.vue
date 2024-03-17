<template>
    <div class="logo">
        <img src="../../../assets/2222227.png" alt="">
        <h2 v-show="!collapsed" class="title">工程项目管理</h2>
    </div>

</template>

<script setup lang="ts">
    defineProps({
        collapsed:{
            type:Boolean
        }
    })
</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    padding-left: 14px;
    width: 200px;
    height: 64px;
    overflow: hidden;
    white-space: nowrap;
    img {
        height: 26px;
        margin-right: 7px;
    }

    .title {
        font-size: 20px;
        color: rgb(255, 255, 255);
        margin-bottom: 0;
    }
}

</style>