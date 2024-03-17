<template>
	<div class="ybj">
	  <h2 class="upload-title">文件上传</h2>
	  <input type="file" ref="fileInput" id="file-select" @change="handleFileChange" />
	  <button @click="uploadFile" class="upload-btn" :disabled="!file">点击上传</button>
	  <h2 class="download-title">已上传文件</h2>
	  <ol class="file-list">
		<li v-for="file in files" :key="file">
		  {{ file }}
		  <div class="btn-container">
		  <button v-if="isImage(file)" @click="previewImage(file)">预览</button>
		  <button @click="downloadFile(file)">下载</button>
		  <button @click="deleteFile(file)">删除</button>
		  </div>
		</li>
	  </ol>
	  <div v-if="imagePreview" class="image-preview">
	<img :src="imagePreview" />
	<button @click="closePreview">关闭</button>
  </div>
	</div>
  </template>
  
<script lang="ts">
import { ref } from 'vue';
import axiosInstance from "../../api/axios";
export default {
  setup() {
    const fileInput = ref<HTMLInputElement | null>(null);
    const file = ref<File | null>(null);
    const files = ref<string[]>([]);
    const imagePreview = ref<string | null>(null);
    const handleFileChange = (): void => {
      const filesList = fileInput.value?.files;
      if (filesList && filesList.length > 0) {
        file.value = filesList[0];
      } else {
        file.value = null;
      }
    };
    const uploadFile = async (): Promise<void> => {
      const username:any = JSON.parse(localStorage.getItem('username') || '');
      const formData = new FormData();
      formData.append('username', username);
      formData.append('file', file.value as File);
      try {
        const response = await axiosInstance.post('/file/upload', formData);
        console.log(response.data);
        alert('文件上传成功');
        file.value = null;
        fileInput.value!.value = '';
        getFiles();
      } catch (error) {
        console.log(error);
        alert('文件上传失败');
      }
    };
    const downloadFile = async (filename: string): Promise<void> => {
      try {
        const response = await axiosInstance.get(`/file/download/${filename}`, {
          responseType: 'blob',
        });
        const blob = new Blob([response.data]);
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        link.click();
      } catch (error) {
        console.log(error);
        alert('文件下载失败');
      }
    };
    const deleteFile = async (filename: string): Promise<void> => {
      try {
        const response = await axiosInstance.delete(`/file/delete/${filename}`);
        console.log(response.data);
        alert('文件删除成功');
        getFiles();
      } catch (error) {
        console.log(error);
        alert('文件删除失败');
      }
    };
    const previewImage = async (filename: string): Promise<void> => {
      try {
        const response = await axiosInstance.get(`/file/download/${filename}`, {
          responseType: 'blob',
        });
        const blob = new Blob([response.data]);
        const url = window.URL.createObjectURL(blob);
        imagePreview.value = url;
      } catch (error) {
        console.log(error);
        alert('图片预览失败');
      }
    };
    const isImage = (filename: string): boolean => {
      return /\.(jpg|jpeg|png|gif)$/i.test(filename);
    };
    const closePreview = (): void => {
      imagePreview.value = null;
    };
    const getFiles = async (): Promise<void> => {
      try {
        const response = await axiosInstance.get('/file/files');
        files.value = response.data;
      } catch (error) {
        console.log(error);
        alert('获取文件列表失败');
      }
    };
    getFiles();
    return {
      fileInput,
      file,
      files,
      imagePreview,
      handleFileChange,
      uploadFile,
      downloadFile,
      deleteFile,
      previewImage,
      isImage,
      closePreview,
    };
  },
};
</script>
  <style>
  .btn-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: auto;
  }
  .btn-container button {
	margin-left: 20px;
  }
  
  .file-list {
	font-size: 16px;
	color: #333;
	background-color: #f5f5f5;
	padding: 10px;
	border-radius: 5px;
  }
  
  .file-list li {
	margin-bottom: 5px;
	padding: 0px;
	border-radius: 3px;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
  }
  
  .file-list button {
	padding: 5px 20px;
	border-radius: 3px;
	background-color: #006696;
	color: #fff;
	border: none;
	cursor: pointer;
  }
  
  .file-list button:hover {
	background-color: #d4e0da;
  }
  .upload-title,
  .download-title {
	font-size: 24px;
	color: #333;
	margin-top: 10px;
  }
  .file-input {
  
	display: none;
  }
  .upload-btn {
	margin-left: 10px;
	padding: 5px 10px;
	border-radius: 3px;
	background-color: #006696;
	color: #fff;
	border: none;
	cursor: pointer;
  }
  .upload-btn:hover {
	background-color: #00796b;
  }
  #file-select {
	padding: -0.5px;
	border-radius: 3px;
	border: 0.5px solid #ccc;
	background-color: #fff;
	display: inline-block;
	cursor: pointer;
  }
  #file-select::file-selector-button {
	font-size: 14px;
	color: #333;
	padding: 5px 10px;
	border-radius: 3px;
	background-color: #006696;
	color: #fff;
	border: none;
	cursor: pointer;
  }
  #file-select::file-selector-button:hover {
	background-color: #00796b;
  }
  .ybj {
	margin-top: 0px;
	margin-right:100px;
	margin-bottom: 30px;
	margin-left: 0px;
  }
  .image-preview {
	position: fixed; /* 固定在窗口中 */
	top:121px;
	left: 200px;
	width: 88%;
	height: 85%;
	background-color: rgba(0, 0, 0, 0.8); /* 半透明黑色背景 */
	display: flex; /* 使用弹性盒子布局 */
	justify-content: center; /* 水平居中 */
	align-items: center; /* 垂直居中 */
  }
  .image-preview img {
	max-width: 80%; /* 图片最大宽度为 80% */
	max-height: 80%; /* 图片最大高度为 80% */
  }
  .image-preview button {
	position: absolute; /* 相对于父元素定位 */
	top: 20px;
	right: 60px;
	background-color: #fff; /* 按钮背景色 */
	color: #333; /* 按钮文字颜色 */
	border: none;
	padding: 10px 20px;
	cursor: pointer;
  }
  </style>