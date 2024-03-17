<script setup lang="ts">
import { ref ,reactive,computed} from 'vue'
import {useStore} from 'vuex';

const store = useStore()

const count = computed(()=>{
  return store.state.count
})

const increment = ()=>{
  store.commit('increment')
}

</script>

<template>
 <button @click="increment">{{ count }}</button>
 <el-button>elementPlus</el-button>
 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
