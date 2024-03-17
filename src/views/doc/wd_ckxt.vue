<template>
  <div>
    <div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="协同人1" style="display: inline-block" class="in">
          <el-select v-model="form.协同人1" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="协同人2" style="display: inline-block" class="in">
          <el-select v-model="form.协同人2" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
<!--        <el-form-item label="协同人1" style="display: inline-block" class="in">-->
<!--          <el-input v-model="form.协同人1" placeholder="请输入内容" ></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="协同人2" style="display: inline-block" class="in">-->
<!--          <el-input v-model="form.协同人2" placeholder="请输入内容" ></el-input>-->
<!--        </el-form-item>-->
        <el-form-item>
          <el-button type="primary" @click="cx">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table :data="tabledatas" border height="500" style="width: 100%">
        <el-table-column type="selection"></el-table-column>
        <!-- <el-table-column label="id" prop="id" width="100">
          <template slot-scope="scope">
            <span v-show="!scope.row.show">{{scope.row.id}}</span>
          </template>
        </el-table-column> -->
        <el-table-column label="文件名称" prop="项目名称" width="150">
          <template v-slot="scope">
            <el-image
              style="width: 30px; height: 30px"
              :src="fileTypeIcon(scope.row)"
              fit="contain"></el-image>
            <!--        <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.文件名称"></el-input>-->
            <span v-show="!scope.row.show">{{scope.row.文件名称}}</span>
          </template>
        </el-table-column>
        <el-table-column label="文件类型" prop="文件类型" width="100">
          <template v-slot="scope">
            <!--          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.文件类型"></el-input>-->
            <span v-show="!scope.row.show">{{scope.row.文件类型}}</span>
          </template>
        </el-table-column>
        <el-table-column label="所属项目" prop="所属项目" width="100">
          <template v-slot="scope">
            <!--          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.文件类型"></el-input>-->
            <span v-show="!scope.row.show">{{scope.row.所属项目}}</span>
          </template>
        </el-table-column>
        <el-table-column label="协同人" prop="协同人" width="100">
          <template v-slot="scope">
            <!--          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.上传人"></el-input>-->
            <span v-show="!scope.row.show">{{scope.row.协同人}}</span>
          </template>
        </el-table-column>
        <el-table-column label="修改时间" prop="修改时间" width="200">
          <template v-slot="scope">
            <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.修改时间"></el-input>
            <span v-show="!scope.row.show">{{scope.row.修改时间}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template v-slot="scope">
            <!-- <el-button type="primary" size="small" @click="yl(scope.row)">预览<i class="el-icon-view el-icon--right"></i></el-button> -->
            <el-button type="primary" size="small" @click="yl1(scope.row)">预览<i class="el-icon-view el-icon--right"></i></el-button>
            <el-button type="primary" size="small" @click="xz(scope.row)">下载<i class="el-icon-download el-icon--right"></i></el-button>
            <el-button type="danger" size="small" @click="de(scope.row,scope.$index)">删除<i class="el-icon-delete el-icon--right"></i></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ElMessageBox } from 'element-plus';
import axiosInstance from '../../api/axios'
import mammoth from 'mammoth'
import ScreenShort from "js-web-screen-shot";
// import pdf from 'vue-pdf';
export default {
  name: "wd_ckxt",
  components: {
   
  },
  data() {
    return {
      tabledatas: [],
      options:[],
      // excelHtml: '',
      // wordHtml: '',
      // excelData: [],
      // dialog: {
      //   dialogVisible: false,
      //   src: '',
      //   isPdf: false,
      //   isExcel: false,
      //   isWord: false
      // },
      form: {
        协同人1: '',
        协同人2: '',
      },
      // file:'',
      // timeLineHeight: "",
    }
  },
  mounted() {
    this.getData();
    this.getData1();
  },
  methods: {
    yl1(row){
      let 文件名称 = row.文件名称;
      let 协同人 = row.协同人;
      let _suffix = row.文件类型;
      let id = row.id;
      let 所属项目 = row.所属项目;
      axiosInstance.post(
        '/wd/wd_ckxt_yl_tz',
        {
          文件名称:文件名称,
          协同人 : 协同人,
          文件类型 : _suffix,
          id : id,
          wenjian:所属项目
        }
      ).then(res => {
        console.log('跳转成功')
        window.localStorage.setItem('token', res.data.token1)
        // if(_suffix.includes('pdf') || _suffix.includes('txt')){
        //   this.$router.push('/pdf')
        // }
        if(_suffix.includes('doc') || _suffix.includes('docx')){
          this.$router.push('/word')
        }
        if(_suffix.includes('img') || _suffix.includes('jpg')|| _suffix.includes('png')|| _suffix.includes('jpeg')){
          this.$router.push('/img')
        }
      }).catch(err =>{
        console.log('跳转失败');
      })
      // if(_suffix.includes('pdf') || _suffix.includes('txt')){
      //   axios.post(
      //     '/wd/wd_ckxt_yl_tz',
      //     {
      //       文件名称:文件名称,
      //       协同人 : 协同人,
      //       文件类型 : _suffix,
      //       id : id,
      //       所属项目:所属项目
      //     }
      //   ).then(res => {
      //     console.log('跳转成功')
      //     window.sessionStorage.setItem('token', res.data.token1)
      //     this.$router.push('/pdf')
      //   }).catch(err =>{
      //     console.log('跳转失败');
      //   })
      //  }
    },
    getData() {
      axiosInstance.post('/wd/wd_ckxt1').then( res=> {
        console.log(res.data.data);
        let list = res.data.data
        list.forEach(element => {
          element["show"] = false
        });
        this.tabledatas = list
        window.localStorage.setItem('token', res.data.token1)
      }).catch(error=>{
        console.log(error);
      })
    },
    getData1() {
      axiosInstance.post('/wd/wd_ckxt2').then( res=> {
        let list = res.data.data
        console.log(res.data.data);
        this.options = list
      }).catch(error=>{
        console.log(error);
      })
    },
    fileTypeIcon(row){
      let _path = "";
      // 其他根据后缀类型
      let _suffix = row.文件类型;
      if (!_suffix) {
        _path = require("../../../public/images/file_none@3x.png");
        return _path;
      }
      if (["jpg", "jpeg", "png", "gif", "bmp"].includes(_suffix)) {
        // 图片
        _path = require("../../../public/images/file_img@3x.png");
      } else if (["zip", "rar", "7z"].includes(_suffix)) {
        _path = require("../../../public/images/file_zip@3x.png");
      } else if (
        ["avi", "mp4", "rmvb", "flv", "mov", "m2v", "mkv"].includes(_suffix)
      ) {
        _path = require("../../../public/images/file_video@3x.png");
      } else if (["mp3", "wav", "wmv", "wma"].includes(_suffix)) {
        _path = require("../../../public/images/file_mp3@3x.png");
      } else if (["xls", "xlsx"].includes(_suffix)) {
        _path = require("../../../public/images/file_excel@3x.png");
      } else if (["doc", "docx"].includes(_suffix)) {
        _path = require("../../../public/images/file_docx@3x.png");
      } else if (["ifc", "gltf"].includes(_suffix)) {
        _path = require("../../../public/images/模型.png");
      } else if ("pdf" == _suffix) {
        _path = require("../../../public/images/file_pdf@3x.png");
      } else if ("ppt" == _suffix) {
        _path = require("../../../public/images/file_ppt@3x.png");
      } else if ("txt" == _suffix) {
        _path = require("../../../public/images/file_txt@3x.png");
      } else {
        _path = require("../../../public/images/file_none@3x.png");
      }
      return _path;
    },
    cx() {
      axiosInstance.post(
        '/router/wd_ckxt_c',
        this.form
      ).then(res => {
        console.log('修改成功')
        let list = res.data.data
        list.forEach(element => {
          element["show"] = false
        });
        this.tabledatas = list
      }).catch(err =>{
        console.log('修改失败');
      })
    },
    xz(row) {
      axiosInstance({
        url: 'xm/xm_wjxz',
        data: {
          文件名称:row.文件名称,
          协同人:row.协同人
        },
        method: 'POST',
        responseType: 'blob'
      }).then(function (response) {
        // 将响应回来的数据下载为文件，固定代码
        // 将响应数据处理为Blob类型
        console.log(row.文件名称)
        var blob = new Blob([response.data]);
        // 创建一个URL对象
        var url = window.URL.createObjectURL(blob);
        // 创建一个a标签
        var a = document.createElement("a");
        a.href = url;
        a.download = row.文件名称;// 这里指定下载文件的文件名
        a.click();
        // 释放之前创建的URL对象
        window.URL.revokeObjectURL(url);
      }).catch(function (reason) {
        console.log(reason)
      })
    },
    de(row, index){
      ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
        // 确定
        this.tabledatas.splice(index, 1)
        axiosInstance.post(
          '/router/wd_ckxt_s',
          {
            文件名称:row.文件名称
          }
        ).then(res => {
          console.log('删除成功')
          this.getData()
        }).catch(err =>{
          console.log('删除失败');
        })
      }).catch(() => {
        // 取消
      })
    }
  }
}
</script>

<style scoped>

</style>

<!-- <div id = 'canvas'>
      <el-dialog
        title="预览"
        append-to-body
        :visible.sync="dialog.dialogVisible"
      >
      <el-button type="primary" @click="jitT()" icon="el-icon-download">截屏</el-button>
        <div v-if="dialog.isPdf" v-loading="iframeLoading" class="pdfClass"
            :style="{'max-height': this.timeLineHeight + 'px' }"
            style="overflow-y:scroll;">
            <pdf :src="dialog.src">
            </pdf>
        </div>
        <div v-else-if="dialog.isExcel">
          <el-table
            :data="excelData"
            border
            stripe
            :header-cell-style="{'background':'#F5F4F7'}"
          >
            <el-table-column
              type="index"
              label="序号"
              width="60"
              :resizable="false"
              align="center"
            />
            <el-table-column
              v-for="(value, key, index) in excelData[0]"
              :key="index"
              :prop="key"
              :label="key"
            />
          </el-table>
        </div>
        <div v-else-if="dialog.isWord" class="wordClass" id="wordView" v-html="vHtml" />
        <div v-else class="imgfile">
          <img
            :src="dialog.src"
            alt=""
          >
        </div>
      </el-dialog>
    </div>
  </div> -->
