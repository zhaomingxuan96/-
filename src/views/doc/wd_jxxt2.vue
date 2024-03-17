<template>
  <div>
    <div>
      <el-button type="primary" @click="back">返回上一级<i class="el-icon-back el-icon--right"></i></el-button>
    </div>
    <br>
    <div>
      <el-breadcrumb separator="/" style="margin-left: 50px;font-size: medium ">
        <el-breadcrumb-item>协同项目列表</el-breadcrumb-item>
        <el-breadcrumb-item >
          <span>{{ levelList }}</span>
        </el-breadcrumb-item>
<!--        <el-breadcrumb-item >
          <span>{{ levelList.文件类型 }}</span>
        </el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
    <el-table :data="tabledatas" border height="550" style="width: 100%">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="文件名称" prop="文件名称" width="200">
        <template slot-scope="scope">
          <el-image
            style="width: 30px; height: 30px"
            :src="fileTypeIcon(scope.row)"
            fit="contain"></el-image>
          <!-- <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.文件名称"></el-input> -->
          <div>
            <a href="javascript:;" @click="goEnviro(scope.row)" v-show="!scope.row.show">{{scope.row.文件名称}}</a>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="文件类型" prop="文件类型" width="90">
        <template slot-scope="scope">
<!--          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.文件类型"></el-input>-->
          <span v-show="!scope.row.show">{{scope.row.文件类型}}</span>
        </template>
      </el-table-column>
      <el-table-column label="文件大小" prop="文件大小" width="90">
        <template slot-scope="scope">
<!--          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.文件大小"></el-input>-->
          <span v-show="!scope.row.show">{{scope.row.文件大小}}</span>
        </template>
      </el-table-column>
      <el-table-column label="描述" prop="描述" width="100">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.主要内容"></el-input>
          <span v-show="!scope.row.show">{{scope.row.主要内容}}</span>
        </template>
      </el-table-column>
      <el-table-column label="协同人" prop="协同人" width="100">
        <template slot-scope="scope">
<!--          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.上传人"></el-input>-->
          <span v-show="!scope.row.show">{{scope.row.上传人}}</span>
        </template>
      </el-table-column>
      <el-table-column label="被协同人" prop="被协同人" width="150">
        <template slot-scope="scope">
<!--          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.上传人"></el-input>-->
          <span v-show="!scope.row.show">{{scope.row.查看权限}}</span>
        </template>
      </el-table-column>
      <el-table-column label="修改时间" prop="修改时间" width="180">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.修改时间"></el-input>
          <span v-show="!scope.row.show">{{scope.row.修改时间}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="450">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="xt(scope.row)">协同<i class="el-icon-share el-icon--right"></i></el-button>
          <el-button type="primary" size="small" @click="xz(scope.row)">下载<i class="el-icon-download el-icon--right"></i></el-button>
          <!-- <el-button type="primary" size="small" @click="edit(scope.row,scope.$index)">{{scope.row.show?'保存':"修改"}}<i class="el-icon-edit el-icon--right"></i></el-button>
          <el-button type="success" size="small" @click="updata(scope.row)">提交<i class="el-icon-circle-check el-icon--right"></i></el-button> -->
          <el-button type="danger" size="small" @click="de(scope.row,scope.$index)">删除<i class="el-icon-delete el-icon--right"></i></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-dialog title="进行协同" :visible.sync="dialogFormVisible">
       <el-form ref="form" :model="form" label-width="80px">
         <template>
           <el-transfer v-model="form.value" :data="options" :titles="['所有人员', '被协同人员']"
           filterable filter-placeholder="请输入被协同人"></el-transfer>
         </template>
         <!-- <el-form-item label="被协同人1">
           <el-select v-model="form.被协同人1" filterable placeholder="请选择">
             <el-option
               v-for="item in options"
               :key="item"
               :label="item"
               :value="item">
             </el-option>
           </el-select>
         </el-form-item> -->
         <el-form-item>
           <el-button type="primary" @click="sure">确定协同</el-button>
           <el-button @click="dialogFormVisible = false">取消</el-button>
         </el-form-item>
       </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "xm_wjgl3",
  data() {
    return {
      tabledatas: [],
      levelList: [],
      dialogFormVisible: false,
      options:[],
      form: {
        value:[]
      },
      文件名称:'',
      协同人:''
    }
  },
  mounted() {
    this.getData();

  },
  methods: {
    back() {
      this.$router.push('/wd_jxxt1')
    },
    getData() {
      axios.post('/wd/wd_jxxt2_1').then( res=> {
        console.log(res.data.data);
        let list = res.data.data
        list.forEach(element => {
          element["show"] = false
        });
        this.tabledatas = list
        this.levelList = res.data.token1.项目名称
      }).catch(error=>{
        console.log(error);
      })
    },
    getData1() {
      axios.post('/wd/wd_jxxt2_2',{id:this.id}).then( res=> {
        let list = res.data.data1
        let list2 = res.data.data2
        console.log(list2);
        list.forEach(item => {
          this.options.push({
            label: item,
            key: item,
          });
        });
        list2.forEach(item => {
          this.form.value.push(item);
        });
        console.log(this.options);
        console.log(this.form.value);
        // this.options = list
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
    xt(row){
      this.options= []
      this.form.value= []
      this.dialogFormVisible = true
      this.id = row.id
      this.文件名称 = row.文件名称
      this.协同人 = row.协同人
      this.文件类型 = row.文件类型
      this.getData1();
    },
    sure(){
      axios.post(
        '/wd/wd_jxxt2_sure',
        {
          id:this.id,
          协同人:this.协同人,
          form:this.form,
          文件名称:this.文件名称,
          文件类型:this.文件类型
        }
      ).then(res => {
        this.dialogFormVisible = false
        this.getData()
      }).catch(err =>{
        console.log('提交失败');
      })
    },
    xz(row) {
      axios({
        url: '/xm/xm_wjxz',
        data: {
          文件名称:row.文件名称,
          上传人:row.上传人
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
        a.download = row.文件名称 + '.' + row.文件类型;// 这里指定下载文件的文件名
        a.click();
        // 释放之前创建的URL对象
        window.URL.revokeObjectURL(url);
      }).catch(function (reason) {
        console.log(reason)
      })
    },
    edit(row, index){
      row.show = row.show ? false : true
      this.$set(this.tabledatas, index, row)
    },
    updata(row) {
      axios.post(
        '/wd/wd_jxxt2_g',
        {
          文件名称:row.文件名称,
          描述:row.描述,
          修改时间:row.修改时间
        }
      ).then(res => {
        console.log('修改成功')
        this.getData()
      }).catch(err =>{
        console.log('修改失败');
      })
    },
    de(row, index){
      this.$confirm('此操作将删除该文件,是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 确定
        this.tabledatas.splice(index, 1)
        axios.post(
          '/wd/wd_jxxt2_s',
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
    },
    goEnviro(row){
      axios.post(
        '/wd/wd_jxxt2_tz',
        {
          文件名称:row.文件名称
        }
      ).then(res => {
        console.log('跳转成功')
        window.sessionStorage.setItem('token', res.data.token3)
        // this.$router.push('/xm_wjgl3')
      }).catch(err =>{
        console.log('跳转失败');
      })
      // this.$router.push('/gltf2')
    }
  }
}
</script>

<style scoped>

</style>
