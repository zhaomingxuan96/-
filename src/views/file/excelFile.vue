<template>
	<el-form label-width="80px" @submit.native.prevent="onSubmit">
		<el-form-item label="班级" prop="class">
			<el-select v-model="form.class" placeholder="请选择班级名称" required clearable>
				<el-option label="智能建造2201班" value="智能建造2201班"></el-option>
				<el-option label="智能建造2202班" value="智能建造2202班"></el-option>
				<el-option label="智能建造2203班" value="智能建造2203班"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="课程" prop="course">
			<el-select v-model="form.course" placeholder="请选择课程名称" required clearable>
				<el-option label="理论力学" value="理论力学"></el-option>
				<el-option label="材料力学" value="材料力学"></el-option>
				<el-option label="结构力学" value="结构力学"></el-option>
				<el-option label="c++程序设计" value="c++程序设计"></el-option>
				<el-option label="混凝土结构设计原理" value="混凝土结构设计原理"></el-option>
				<el-option label="土木工程概论" value="土木工程概论"></el-option>
				<el-option label="工程制图" value="工程制图"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="类别" prop="category">
			<el-select v-model="form.category" placeholder="请选择文件使用类别名称" required clearable>
				<el-option label="作业" value="作业"></el-option>
				<el-option label="考试" value="考试"></el-option>
				<el-option label="账户录入" value="账户录入"></el-option>
			</el-select>
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
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import axiosInstance from "../../api/axios";


const form = ref({
	class: '',
	course: '',
	category:''
});
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