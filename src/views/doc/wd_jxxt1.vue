<template>
  <div>
    <div>
      <el-breadcrumb separator="/" style="margin-left: 50px;font-size: medium ">
<!--          <el-breadcrumb-item v-for="item in levelList">-->
<!--            <span>{{ item.meta.title }}</span>-->
<!--          </el-breadcrumb-item>-->
          <el-breadcrumb-item>协同项目列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <el-table :data="tabledatas" border height="600" style="width: 100%">
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="项目名称" prop="项目名称" width="150">
          <template slot-scope="scope">
            <el-image
              style="width: 30px; height: 30px"
              src="images/folder@3x.png"
              fit="contain"></el-image>
            <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.项目名称"></el-input>
            <div>
              <a href="javascript:;" @click="goEnviro(scope.row)" v-show="!scope.row.show">{{scope.row.项目名称}}</a>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="项目起始时间" prop="项目起始时间" width="120">
          <template slot-scope="scope">
            <!--          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.文件类型"></el-input>-->
            <span v-show="!scope.row.show">{{scope.row.项目起始时间}}</span>
          </template>
        </el-table-column>
        <el-table-column label="项目终止时间" prop="项目终止时间" width="120">
          <template slot-scope="scope">
            <!--          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.文件大小"></el-input>-->
            <span v-show="!scope.row.show">{{scope.row.项目终止时间}}</span>
          </template>
        </el-table-column>
        <el-table-column label="项目负责人" prop="项目负责人" width="100">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.项目负责人"></el-input>
            <span v-show="!scope.row.show">{{scope.row.项目负责人}}</span>
          </template>
        </el-table-column>
        <el-table-column label="项目成员" prop="项目成员" width="300">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.项目成员"></el-input>
            <span v-show="!scope.row.show">{{scope.row.项目成员}}</span>
          </template>
        </el-table-column>
        <el-table-column label="项目进度" prop="项目进度" width="150">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.项目进度"></el-input>
            <span v-show="!scope.row.show">{{scope.row.项目进度}}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column label="操作" width="450">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="xz(scope.row)">下载<i class="el-icon-download el-icon--right"></i></el-button>
            <el-button type="primary" size="small" @click="edit(scope.row,scope.$index)">{{scope.row.show?'保存':"修改"}}<i class="el-icon-edit el-icon--right"></i></el-button>
            <el-button type="success" size="small" @click="updata(scope.row)">提交<i class="el-icon-circle-check el-icon--right"></i></el-button>
            <el-button type="danger" size="small" @click="de(scope.row,scope.$index)">删除<i class="el-icon-delete el-icon--right"></i></el-button>
          </template>
        </el-table-column> -->
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "xm_wjgl1",
  data() {
    return {
      tabledatas: []
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.post('/wd/wd_jxxt1').then( res=> {
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
    xz(row) {
      axios({
        url: '/wjxz1',
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
        '/wd/wd_jxxtl_g',
        {
          文件名称:row.文件名称,
          描述:row.描述,
          项目进度:row.项目进度
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
          '/wd/wd_jxxtl_s',
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
        '/wd/wd_jxxt1_tz',
        {
          项目名称:row.项目名称
        }
      ).then(res => {
        console.log('跳转成功')
        window.sessionStorage.setItem('token', res.data.token1)
        this.$router.push('/wd_jxxt2')
      }).catch(err =>{
        console.log('跳转失败');
      })
      // this.$router.push('/xm_wjgl2')
    }
  }
}
</script>

<style scoped>

</style>
