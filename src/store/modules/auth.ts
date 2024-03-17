import { Module } from "vuex";
import { RootState } from "../index";
import { login, loginByToken } from '@/api/Auth';
import router from '@/router';
import { UserType } from '../type';
import { store } from '@/store'

//TypeScript中的接口定义，名为AuthState
export interface AuthState {
    token: string,
    //UserType类型，用于存储用户信息，在type.ts中声明的
    userInfo: UserType,
    roles: string[],
    username: string
}
//定义authStore，其类型为Module模块，包含两个泛型参数
export const authStore: Module<AuthState, RootState> = {
    // namespaced 用于指示该模块中的所有action、mutation和getter是否应该被命名空间化
    //当设置为true时，表示该模块中的所有action、mutation和getter的名称都会被添加上模块名前缀，避免不同模块之间的命名冲突
    //如果在这两个模块中都设置了namespaced: true，那么在使用时就应该写成auth/addItem和cart/addItem，可以避免命名冲突
    namespaced: true,
    state: (): AuthState => ({
        token: '',
        userInfo: {
            //角色名
            name: '',
        },
        username: '',
        roles: []
    }),

    mutations: {
        addToken(state: AuthState, token: string) {
            state.token = token
        },
        addUserInfo(state: AuthState, userinfo: UserType) {
            state.userInfo = userinfo
        },
        addusername(state: AuthState, username: string) {
            state.username = username
        }
    },

    getters: {
        getToken(state: AuthState) {
            return state.token
        }
    },
    //只有action能够执行异步操作
    //{ commit, state, dispatch }是ES6的解构语法，用于从context对象中提取commit、state和dispatch属性，并将它们作为参数传递给该函数。
    //使用解构语法可以简化代码，直接使用commit、state、等属性，不需要每次写出context.commit、context.state、context.dispatch等完整的属性名
    //比如下面的代码还可以把{ commit, state, dispatch }替换为context，commit和state替换为context.commit、context.state也可以
    actions: {
        // 账号密码登录
        login({ commit, state, dispatch }, requestUser) {
            login(requestUser).then(result => {
                state.userInfo = result.data.name
                state.username = result.data.username
                console.log(state.userInfo);
                console.log(state.username);
                
                console.log(result);
                console.log(result.data.token);

                //console.log(result.data.config.data);
                //commit调取mutations中的addtoken，result.data.token是传递给mutations的addToken的参数，也就是获取的token
                //addtoken把获取到的token添加到state.token
                commit('addToken', result.data.token)
                commit('addUserInfo', result.data.name)
                commit('addusername', result.data.username)
                //用于将token信息存储到本地
                //token是存储的键名，用于标识存储的数据；result.data.token是存储的数据
                localStorage.setItem('token', result.data.token)
                //sessionStorage.setItem("userInfo", JSON.stringify(result.data.name))
                localStorage.setItem("userInfo", JSON.stringify(result.data.name))

                localStorage.setItem("username", JSON.stringify(result.data.username))

                //result.data.status是服务器返回的状态码，用于判断登录请求是否成功。如果成功，result.data.status的值为真（true），否则为假（false）
                if (result.status = 200) {
                    router.push({ path: '/workbench' })
                }
            })
        },

        // token登录
        loginByToken({ commit, state, dispatch }, token) {
            commit('addToken', token)
            loginByToken(token).then(result => {
                state.userInfo = result.data.name
                state.username = result.data.username
                console.log(result);
                console.log(result.config.headers.Authorization)
                localStorage.setItem('token', result.data.token)
                //sessionStorage.setItem("userInfo", JSON.stringify(result.data.name))
                localStorage.setItem("userInfo", JSON.stringify(result.data.name))
                localStorage.setItem("username", JSON.stringify(result.data.username))

                console.log(result.status);
                if (result.status == 200) {
                    router.push({ path: '/workbench' })
                }
            }).catch(() => {
                //如果没有，本地token移除掉
                localStorage.removeItem('token')
            })
        }
    }
}