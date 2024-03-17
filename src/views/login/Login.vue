<script setup lang="ts">
import {reactive,onMounted} from 'vue';
import { useRouter } from "vue-router";
import { useStore } from "@/store";

const router = useRouter()

//获取全局状态管理对象
const store = useStore()

const loginForm = reactive({
    username:'',
    password:'',
})

// rules表单校验
const loginRules= reactive({
  username:[
    {
      required:true,
      message:'不能为空,请输入学号',
      trigger:'blur'
    },
    {
      pattern:/^[0-9]{9}$/, 
      message:'请输入9位的数字',
      trigger:'blur'
    }
  ],
  password:[
    {
      required:true,
      message:'不能为空,请输入密码',
      trigger:'blur'
    },
    {
      min:6,
      max:15,
      message:'请输入6到15位的字母或者数字',
      trigger:'blur'
    },
  ]
})

onMounted(() => {
  handleToken()
})
// token登录
const handleToken = ()=>{
  //localStorage.getItem()方法从本地存储中获取Token
  const token = localStorage.getItem('token')
  if(token!= null) {
    //使用Vuex Store中的dispatch()方法来触发一个名为loginByToken的Action。
    store.dispatch('authStore/loginByToken',token)
  }
}

// 登录
const handleLogin = ()=>{
  //使用Vuex Store中的dispatch()方法来触发一个名为login的Action。
  //将loginForm作为参数传递进去
  store.dispatch('authStore/login',loginForm)
}

const register = () =>{
  router.push("/register")
}

</script>

<template>
  <div class="login-container">
    <!-- 背景vedio -->
    <video poster="@/assets/login/1.jpg" loop autoplay muted>
      <source src="@/assets/login/Particles.mp4" />
    </video>

    <div class="login-form">
      <!-- 标题 -->
      <header>
        <img src="../../assets/11117.png" style="margin-right:10px ;" />
        <h3 class="ttitle">工程项目管理平台</h3>
      </header>
      <el-form :model="loginForm" :rules="loginRules">
          <el-form-item prop="username">
              <el-icon>
                <user />
              </el-icon>
            <el-input placeholder="学号" v-model="loginForm.username" type="text"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-icon>
              <lock />
            </el-icon>
            <el-input placeholder="密码" v-model="loginForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item style=" border: none;background: none;">
           <el-button type="primary" style="width: 100%;" @click="handleLogin">登录</el-button>
          </el-form-item>
          <el-form-item style=" border: none; background: none;">
           <el-button type="primary" style="width: 100%;" @click="register">注册</el-button>
          </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss">
// 隐藏滚动条
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
.login-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  video {
    position: absolute;
    /* Vertical and Horizontal center*/
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    z-index: -1;
  }
  .login-form {
    width: 400px;
    height: 380px;
    padding: 4vh;
    margin: 20px;
    background: url("@/assets/login/login_form.png");
    background-size: 100% 100%;
    border-radius: 10px;
    box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
    opacity: "0.2";

    header {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      img {
        display: inline-block;
        width: 40px;
      }

      h1 {
        margin-bottom: 0;
        font-size: 24px;
        color: #fff;
        text-align: center;
      }
    }
    .el-input {
      display: inline-block;
      height: 44px;
      width: 85%;
      input {
        height: 44px;
        background: transparent !important;
        border: 0px;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $lightGray;
        caret-color: $loginCursorColor;
       // -webkit-appearance: none;
        margin-left: 10px;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $loginBg inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }

    .el-form-item {
      display: flex;
      flex-wrap: nowrap;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      padding-left: 10px;
    }

    .verify-item {
      padding-left: 0%;
      border: none;
      background: none;
    }
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $darkGray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $lightGray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .set-language {
      color: #fff;
      position: absolute;
      top: 3px;
      font-size: 18px;
      right: 0px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $darkGray;
    cursor: pointer;
    user-select: none;
  }
  .ttitle {
        font-size: 20px;
        color: rgb(255, 255, 255);
        margin-bottom: 0;
    }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>