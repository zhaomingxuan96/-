<template>
    <el-form label-width="80px" :model="form" :rules="loginRules" @submit.native.prevent="onSubmit">
        <el-form-item label="班级" prop="class">
            <el-input v-model="form.class" placeholder="请输入班级名称" required clearable></el-input>
        </el-form-item>
        <el-form-item label="课程" prop="course">
            <el-input v-model="form.course" placeholder="请输入课程名称" required clearable></el-input>
        </el-form-item>
        <el-form-item label="类别" prop="category">
            <el-input v-model="form.category" placeholder="请输入文件使用类别名称" required clearable></el-input>
        </el-form-item>
        <el-form-item label="文件" prop="file">
            <input type="file" ref="fileInput" accept=".xlsx" @change="onFileChange">
        </el-form-item>
        <el-form-item>
            <el-button type="primary" :disabled="!fileSelected" native-type="submit">提交</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import axiosInstance from "../../api/axios";

const form = ref({
    class: '',
    course: '',
    category:''
});

// rules表单校验
// rules表单校验
const loginRules= reactive({
    class:[
    {
        required:true,
        message:'不能为空,请输入班级',
        trigger:'blur'
    },
    {
        pattern: /^\S+$/, 
        message:'输入内容不可以有空格1',
        trigger:'blur'
    }
    ],
    course:[
    {
        required:true,
        message:'不能为空,请输入课程名',
        trigger:'blur'
    },
    {
		pattern: /^\S+$/, 
        message:'输入内容不可以有空格',
        trigger:'blur'
    }
    ],
    category:[
    {
        required:true,
        message:'不能为空,请输入类型',
        trigger:'blur'
    },
    {
		pattern: /^\S+$/, 
        message:'输入内容不可以有空格',
        trigger:'blur'
    }
    ]
})

const fileSelected = ref(false);
let fileData: File | null = null;
const onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        fileData = target.files[0];
        const MAX_FILE_SIZE = 5 * 1024 * 1024;
        if (fileData?.size > MAX_FILE_SIZE) {
            ElMessage.error('文件大小超出限制，请上传不超过5MB的文件');
            fileData = null;
            fileSelected.value = false;
            return;
        }
        const fileExtension = fileData?.name.split('.').pop();
        if (!fileExtension || !['xls', 'xlsx'].includes(fileExtension)) {
            ElMessage.error('请上传 Excel 文件');
            fileData = null;
            fileSelected.value = false;
            return;
        }
        fileSelected.value = true;
    } else {
        fileData = null;
        fileSelected.value = false;
    }
};
const onSubmit = () => {
    if (!fileSelected.value) {
        return;
    }
    const username:any = JSON.parse(localStorage.getItem('username') || '');
    const formData = new FormData();
    formData.append('class', form.value.class);
    formData.append('course', form.value.course);
    formData.append('category', form.value.category);
    formData.append('username', username);
    formData.append('file', fileData as File);
    
    axiosInstance.post('/file/excelupload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => {
            ElMessage.success(response.data.message);
        })
        .catch(error => {
            console.error(error);
            ElMessage.error('上传失败');
        });
    console.log(formData);
};
</script>
