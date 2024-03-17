import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store,key } from './store'
import * as ElIcons from '@element-plus/icons'
import * as ElementUI from 'element-plus'
import GUIComponent from './gui';
import type {ElMessageBoxShortcutMethod,} from 'element-plus'
import { SFCInstallWithContext } from 'element-plus/lib/utils'
import "./styles/index.less";
  



//应用程序实例是由createApp函数创建的一个对象，它包含了应用程序的所有配置、组件、插件等相关信息，
//并且能够响应数据的变化，从而动态更新应用程序的界面。
const app = createApp(App)
app.component('GUI', GUIComponent);
for(const name in ElIcons){
	app.component(name,(ElIcons as any)[name])
}//是Vue 3中创建应用程序实例时使用的一种链式调用方式，它的作用是将路由、状态管理器和应用程序挂载到特定的DOM元素上进行展示。
//app.use(router)表示将路由注册到应用程序中，以便在应用程序中使用路由功能。
//app.use(store, key)表示将状态管理器注册到应用程序中，并且指定了一个唯一的键（key），以确保在整个应用程序中只有一个状态管理器实例。
//app.mount('#app')表示将应用程序挂载到具有id为“app”的DOM元素上，这个DOM元素可以是任何选择器。
app.use(router).use(store,key).mount('#app')

// 全局组件添加属性
// $Alert、$Confirm和$Notify的类型均来自于Element UI库，分别用于展示弹框、提示消息和确认框。
// $collapsed的类型为布尔型，用于记录全局的折叠状态。
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
      $Alert: ElMessageBoxShortcutMethod
      $Notify:SFCInstallWithContext<ElementUI.Notify>,
      $Confirm:ElMessageBoxShortcutMethod,
      $collapsed:boolean
  }
}
//通过为全局组件实例添加这些属性，我们可以在整个应用中方便地调用Element UI库中的弹框、
//提示消息和确认框组件，并且可以记录全局的折叠状态，方便在不同的组件中进行使用和共享。
//$Alert和$Confirm的类型都是ElMessageBoxShortcutMethod，表示它们是Element UI库中弹框组件的快捷方法
app.config.globalProperties.$Alert = ElementUI.ElMessageBox.alert 
app.config.globalProperties.$Confirm = ElementUI.ElMessageBox.confirm
//$Notify的类型为SFCInstallWithContext<ElementUI.Notify>，表示它是Element UI库中提示消息组件的快捷方法
app.config.globalProperties.$Notify = ElementUI.ElNotification