<template>
    <div class="userInfo">
        <el-dropdown :show-timeout="10" :hide-timeout="10" placement="bottom" trigger="hover">
            <!--用户信息弹窗开关 下拉菜单-->
            <div>
                <img src="../../../assets/111113.png" alt="点击退出">
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <el-row>
            <el-col>
                <span style="color: gray; margin-left: 10px;font-size:15px">
                    {{ userInfo }}
                </span>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang='ts'>
import { computed } from 'vue'
import { useStore } from '@/store'
// import { useRouter } from 'vue-router';
const store = useStore()
// const router = useRouter()
const userInfo = computed(() => {
    return store.state.authStore.userInfo
})
console.log(userInfo);

const handleLogout = (): void => {
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    localStorage.removeItem('username')

    location.reload()
}
</script>
<style lang='scss' scoped>
.userInfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>