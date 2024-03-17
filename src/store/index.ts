import { createStore,Store,useStore as baseUseStore} from "vuex"
import { InjectionKey } from 'vue'
import {tabStore,TabState} from './modules/tabs'
import { authStore,AuthState } from "./modules/auth"
//这个对象定义了整个 Vuex store 的根状态。在这个模块中，我们定义了一个 RootState 接口，
//它包含了一个名为 tabStore 的属性，而且该属性的类型是 TabState，表示这个 Vuex store 中的 tabStore 模块的状态类型。
export interface RootState {
    tabStore:TabState,
    authStore:AuthState,
 
}
//InjectionKey这个接口是 Vue.js 3 中的一个类型，用于提供一个唯一的键，
//以便在组件中注入依赖。在这个模块中，我们定义了一个名为 key 的 InjectionKey，用于在 Vue.js 3 应用程序中注入 store。
//Symbol 是 ES6 中的一个新的原始数据类型，用于表示独一无二的值。
//在这个模块中，我们使用 Symbol 创建了一个唯一的 key，用于在 Vue.js 3 应用程序中注入 store。
export const key: InjectionKey<Store<RootState>> = Symbol()

//使用createStor这个函数创建了一个名为store的Vuex store,并且store的根状态类型是'RootState'
export const store:Store<RootState> = createStore({
    modules:{
        tabStore,
        authStore,
    }
})

// 
//这个函数是一个自定义的组合函数，用于在 Vue.js 3 组件中使用 Vuex store。在这个模块中，
//我们使用 useStore 函数返回 baseUseStore(key)，这将通过 key 注入 store，并返回一个可用于在组件中访问 Vuex store 的实例。
export function useStore() {
    return baseUseStore(key)
} 