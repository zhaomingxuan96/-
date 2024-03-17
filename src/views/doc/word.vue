<template>
  <div>
    <div>
      <el-button type="primary" @click="back()">返回上一级<i class="el-icon-back el-icon--right"></i></el-button>
      <el-button type="primary" @click="jitT()" icon="el-icon-camera">截屏</el-button>
    </div>
    <br>
    <br>
    <div
       :style="{'max-height': this.timeLineHeight + 'px' }"
       style="'border:1px dashed;width:100%;height:550px;overflow:scroll'">
        <!-- word查看详情 -->
        <div id="wordView" v-html="vHtml"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import ScreenShort from "js-web-screen-shot";
  import mammoth from "mammoth";
  export default {
    data() {
      return {
        // 显示word excel
        vHtml: "",
        wordURL: "",
        file:''
      };
    },
    mounted() {
      this.getData();
      this.timeLineHeight = document.documentElement.clientHeight - 140;
      window.onresize = () => {
        this.timeLineHeight = document.documentElement.clientHeight - 140;
      };
    },
    methods:{
      back() {
        // this.$router.push('/wd_ckxt')
        this.$router.go(-1)
      },
      getData() {
        axios({
          url: '/wd/wd_ckxt_yl_word',
          // data: {
          //   文件名称:文件名称,
          //   id:id,
          //   协同人:协同人
          // },
          method: 'POST'
        }).then(res => {
          console.log(res);
          this.wordURL = res.data
          this.readwordFromRemoteFile(this.wordURL);
        })
      },
      readwordFromRemoteFile: function (url) {
        var vm = this;
        var xhr = new XMLHttpRequest();
        xhr.open("get", url, true);
        xhr.responseType = "arraybuffer";
        xhr.onload = function () {
          if (xhr.status == 200) {
            console.log(xhr.response)
            mammoth
              .convertToHtml({ arrayBuffer: new Uint8Array(xhr.response) })
              .then(function (resultObject) {
                vm.$nextTick(() => {
                  // document.querySelector("#wordView").innerHTML =
                  //   resultObject.value;
                  vm.vHtml = resultObject.value;
                });
              });
          }
        };
        xhr.send();
      },
      jitT(){
        const screenShotHandler = new ScreenShort({
          enableWebRtc: false,  //是否显示选项框
          level:99,  //层级级别
          completeCallback: this.callback,
          closeCallback: this.closeFn,
        });
      },
      /**
       * 根据图片生成画布
       */
      convertImageToCanvas(image) {
        // const iframeHtml = this.$refs.timeLineDom.contentWindow // 获取iframe内容
        // const canvas = iframeHtml.document.getElementsByTagName('body')[0]
        var canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        canvas.getContext("2d").drawImage(image, 0, 0);
        return canvas;
      },
      /**
       * 生成图片
       * 截图确认按钮回调函数
       */
      callback(base64data) {
        var image = new Image();
        image.src = base64data;
        image.onload = () => {
          var canvas = this.convertImageToCanvas(image);
          var url = canvas.toDataURL("image/jpeg");

          var bytes = window.atob(url.split(",")[1]);  //通过atob将base64进行编码
          //处理异常，将ASCII码小于0的转换为大于0,进行二进制转换
          var buffer = new ArrayBuffer(bytes.length);
          var uint = new Uint8Array(buffer);  //生成一个8位数的数组
          for (var i = 0; i < bytes.length; i++) {
            uint[i] = bytes.charCodeAt(i);  //根据长度返回相对应的Unicode 编码
          }
          //Blob对象
          var imageFile= new Blob([buffer], { type: "image/jpeg" }); //type为图片的格式
          this.file = imageFile
          this.submit();
        };
      },
      submit(){
        console.log(1)
        const formData = new FormData();
        formData.append('file',this.file);
        // formData.append('class',this.form.region);
        axios.post('/wd/wd_ckxt_yl_upload',formData,{
          // onUploadProgress:(progressEvent)=>{
          //   var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
          //   this.percentCompleted = percentCompleted
          // }
        }).then(res => {
          if(res.data.status == 200){
            this.$message({
              message: '上传成功',
              type: 'success'
            });
          }
          if(res.data.status !== 200){
            this.$message.error('上传失败');
          }
        }).catch(err =>{
          this.$message.error('服务器无响应');
        });
      }
    }
  }
</script>

<style>
</style>
