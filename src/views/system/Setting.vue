<template>
  <h1>zip压缩文件解压</h1>
  <div>
    <input type="file" @change="selectFile"/>
    <button @click="unzip">解压</button>
  </div>
</template>
<script>
import JSZip from 'jszip'
export default {
  data() {
    return {
      file: null,
      zip: null
    }
  },
  methods: {
    selectFile(event) {
      this.file = event.target.files[0]
    },
    unzip() {
      if (!this.file) {
        alert('请先选择文件')
        return
      }
      const reader = new FileReader()
      reader.readAsArrayBuffer(this.file)
      reader.onload = () => {
        const blob = new Blob([reader.result], { type: this.file.type })
        const zip = new JSZip()
        zip.loadAsync(blob).then((zip) => {
          // 解压成功后的操作
          for (const path in zip.files) {
            if (!zip.files[path].dir) {
              zip.file(path).async('blob').then((content) => {
                const link = document.createElement('a')
                link.href = window.URL.createObjectURL(content)
                link.download = path.split('/').pop()
                link.click()
              })
            }
          }
        }).catch((error) => {
          // 解压失败后的操作
          console.error(error)
        })
      }
    }
  }
}
</script>
