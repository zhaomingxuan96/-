<template>
  <el-table :data="tabledatas" border height="500" style="width: 100%">
    <el-table-column type="selection"></el-table-column>
    <el-table-column label="文件名称" prop="文件名称" width="150">
      <template slot-scope="scope">
        <el-image
          style="width: 30px; height: 30px"
          :src="fileTypeIcon(scope.row)"
          fit="contain"></el-image>
<!--        <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.文件名称"></el-input>-->
        <span v-show="!scope.row.show">{{scope.row.文件名称}}</span>
      </template>
    </el-table-column>
    <el-table-column label="文件类型" prop="文件类型" width="100">
      <template slot-scope="scope">
        <!--          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.文件类型"></el-input>-->
        <span v-show="!scope.row.show">{{scope.row.文件类型}}</span>
      </template>
    </el-table-column>
    <el-table-column label="文件大小" prop="文件大小" width="100">
      <template slot-scope="scope">
        <!--          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.文件大小"></el-input>-->
        <span v-show="!scope.row.show">{{scope.row.文件大小}}</span>
      </template>
    </el-table-column>
    <el-table-column label="协同人" prop="协同人" width="100">
      <template slot-scope="scope">
        <!--          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.文件大小"></el-input>-->
        <span v-show="!scope.row.show">{{scope.row.协同人}}</span>
      </template>
    </el-table-column>
    <el-table-column label="被协同人1" prop="被协同人1" width="100">
      <template slot-scope="scope">
        <el-select v-show="scope.row.show" v-model="scope.row.被协同人1" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
        <span v-show="!scope.row.show">{{scope.row.被协同人1}}</span>
      </template>
    </el-table-column>
    <el-table-column label="被协同人2" prop="被协同人2" width="100">
      <template slot-scope="scope">
        <el-select v-show="scope.row.show" v-model="scope.row.被协同人2" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
        <span v-show="!scope.row.show">{{scope.row.被协同人2}}</span>
      </template>
    </el-table-column>
    <el-table-column label="修改时间" prop="修改时间" width="100">
      <template slot-scope="scope">
        <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.修改时间"></el-input>
        <span v-show="!scope.row.show">{{scope.row.修改时间}}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="300" fixed="right">
      <template slot-scope="scope">
        <el-button type="primary" size="small" @click="yl(scope.row)">预览<i class="el-icon-download el-icon-view"></i></el-button>
        <el-button type="primary" size="small" @click="xz(scope.row)">下载<i class="el-icon-download el-icon--right"></i></el-button>
        <el-button type="primary" size="small" @click="edit(scope.row,scope.$index)">{{scope.row.show?'保存':"修改"}}</el-button>
        <el-button type="success" size="small" @click="updata(scope.row)">提交</el-button>
        <el-button type="danger" size="small" @click="de(scope.row,scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";

export default {
  name: "wd_jxxt",
  data() {
    return {
      tabledatas: [],
      options:[]
    }
  },
  mounted() {
    this.getData();
    this.getData1();
  },
  methods: {
    getData() {
      axios.post('/router/wd_jxxt1').then( res=> {
        console.log(res.data.data);
        let list = res.data.data
        list.forEach(element => {
          element["show"] = false
        });
        this.tabledatas = list
      }).catch(error=>{
        console.log(error);
      })
    },
    getData1() {
      axios.post('/router/wd_jxxt2').then( res=> {
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
    xz(row) {
      axios({
        url: '/wjxz1',
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
    edit(row, index){
      row.show = row.show ? false : true
      this.$set(this.tabledatas, index, row)
    },
    updata(row) {
      axios.post(
        '/wd/wd_jxxt_g',
        {
          文件名称:row.文件名称,
          被协同人1:row.被协同人1,
          被协同人2:row.被协同人2,
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
          '/wd/wd_jxxt_s',
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
  }
}
</script>

<style scoped>

</style>
