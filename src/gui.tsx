import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import * as dat from 'dat.gui';

export default defineComponent({
  name: 'GUI',
  setup() {
    const isMounted = ref(false); // 新增

    // 在创建组件时创建 GUI 实例
    const gui = ref(new dat.GUI());

    // 在组件挂载时将 GUI 附加到页面上
    onMounted(() => {
      const guiContainer = document.createElement('div');
      guiContainer.classList.add('gui');
      document.body.appendChild(guiContainer);
      gui.value.domElement.style.position = 'absolute';
      gui.value.domElement.style.top = '0';
      guiContainer.appendChild(gui.value.domElement);
      isMounted.value = true; // 新增
    });

    // 在组件卸载时销毁 GUI 实例
    onUnmounted(() => {
      if (gui.value) {
        gui.value.destroy();
        //gui.value = null;
      }
    });

    // 监听 isMounted 状态的变化，确保组件挂载后再使用 GUI 实例
    watch(isMounted, (value) => {
      if (value && gui.value) {
        // 处理 GUI 实例的逻辑
        gui.value.add({ text: 'Hello World' }, 'text');
      }
    });

    return {
      gui
    };
  }
});