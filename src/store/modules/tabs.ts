import {Module} from 'vuex'
import {Itab} from '../type'
import {RootState} from '../index'

export interface TabState {
    
    tabsList:Array<Itab>,
    //表示右键单击打开上下文菜单的选项卡的 ID 的字符串
    contextMenuTabId:string  
}
//tabStore 模块使用 TypeScript 的 Module 类型进行定义，它需要两个泛型参数：
//TabState：模块状态的类型     RootState：Vuex 存储的根状态的类型
//这允许在访问模块的状态、mutations、actions 和 getters 时进行类型检查和自动完成
export const tabStore: Module<TabState,RootState> ={
    //tabStore 模块是有命名空间的，这意味着它的 mutations、actions 和 getters 将以 tabStore/ 为前缀。
    namespaced:true,
    state:{
        tabsList:[] ,
        contextMenuTabId:''
    },

    mutations:{
        // 添加tab
        addTab(state:TabState,tab:Itab) {
              const isSome = state.tabsList.some((item)=> item.path == tab.path)
              if(!isSome) {
                  state.tabsList.push(tab)
              }
        },

        // 删除tab
        closeCurrentTab(state:TabState,targetName:string) {
            const index = state.tabsList.findIndex((item)=> item.path == targetName)
            state.tabsList.splice(index,1)
        },

        // 右键打开菜单保存path
        saveCurContextTabId(state:TabState,curtextMenuTabId) {
                state.contextMenuTabId = curtextMenuTabId
        },

        // 删除所有tab
        closeAllTabs(state:TabState) {
            state.tabsList = []
            sessionStorage.removeItem('TABS_ROUTES')
        },

        // 删除其它tab
        closeOtherTabs(state:TabState, par:string) {
                if(par == 'other') {
                    state.tabsList = state.tabsList.filter((item)=> item.path == state.contextMenuTabId)
                } else if(par == 'left') {
                    const index = state.tabsList.findIndex((item)=> item.path == state.contextMenuTabId)

                    state.tabsList.splice(0,index)
                } else if(par == 'right') {
                    const index = state.tabsList.findIndex((item)=> item.path == state.contextMenuTabId)
                    state.tabsList.splice(index + 1)
                }
        }
    },
    getters:{
       getAddTab(state:TabState) {
            return state.tabsList
       }
    }
}