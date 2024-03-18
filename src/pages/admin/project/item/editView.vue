<template>
  <div>
    <el-form ref="form" :model="formData" label-width="80px" label-position="left" size="mini">
      <el-form-item>
        <el-upload action="/admin/item/uploadAttachment" list-type="picture-card" :on-success="uploadSuccess">
          <!-- 显示+号图标 -->
            <i slot="default" class="el-icon-plus"></i>
          <!-- 文件列表项插槽 -->
            <div slot="file" slot-scope="{file}">
              <!-- 显示上传文件的缩略图 -->
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt="上传文件的缩略图">
              <!-- 文件上传操作按钮组 -->
              <span class="el-upload-list__item-actions">
                  <!-- 预览按钮 -->
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                  <i class="el-icon-zoom-in"></i>
                </span>
                  <!-- 下载按钮 -->
                <span v-if="!disabled" class="el-upload-list__item-download" @click="handleDownload(file)">
                  <i class="el-icon-download"></i>
                </span>
                  <!-- 删除按钮 -->
                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
        </el-upload>
        <!-- Element UI 中的对话框组件，根据 dialogVisible 控制对话框的显示与隐藏 -->
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="预览">
        </el-dialog>
      </el-form-item>

      <el-form-item label="ID" v-if="formData.id>0">
        <el-input v-model="formData.id" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="组织ID">
        <el-input v-model="formData.org_id"></el-input>
      </el-form-item>
      <el-form-item label="项目ID">
        <el-input v-model="formData.project_id"></el-input>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="formData.title" maxlength="50" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" rows="8" v-model="formData.content" laceholder="请输入内容" maxlength="500" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="发生时间">
        <el-date-picker
          v-model="formData.time"
          type="datetime"
          placeholder="选择日期时间"
          align="left"
          :picker-options="pickerOptions"
          value-format="timestamp" >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="时间显示格式">
        <el-input v-model="formData.time_show_type"></el-input>
      </el-form-item>
      <el-form-item label="附件">
        <el-input v-model="formData.attachment"></el-input>
      </el-form-item>
      <el-form-item label="是否已删除">
        <el-input v-model="formData.is_delete"></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input v-model="formData.create_time"></el-input>
      </el-form-item>
      <el-form-item label="更新时间">
        <el-input v-model="formData.update_time"></el-input>
      </el-form-item>
      <!-- <el-form-item label="父级ID">
        <el-select v-model="formData.parent_id" placeholder="请选择分类">
          <el-option v-for="p in parent_list" :key="p.id" :label="p.name" :value="p.id"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm">保存</el-button>
        <el-button @click="goBack">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      formData: {
        attachment: []
      },
      parent_list: [],
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      // 图片相关
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    }
  },
  methods: {
    // 1 表单提交
    async submitForm () {
      try {
        let handleUrl = '/admin/item/add'
        if (this.formData.id >= 0) {
          handleUrl = '/admin/item/edit'
        }
        await axios.post(handleUrl, this.formData).then((res) => {
          if (res.data.code === 0) {
            this.$message({
              showClose: true,
              message: res.data.msg,
              type: 'success'
            })

            // 延迟跳转至列表页
            setTimeout(() => {
              this.$router.push({ path: '/admin/item/index' })
            }, 3000)
          } else {
            this.$message({
              showClose: true,
              message: res.data.msg,
              type: 'error'
            })
          }
        })
      } catch (error) {
        alert('系统错误')
      }
    },
    goBack () {
      this.$router.go(-1)
    },
    // 图片相关
    // 上传成功
    uploadSuccess (res, file, fileList) {
      console.log('res_file1')
      console.log(res)
      console.log(file)
      console.log(fileList)
      console.log('res_file22')
      console.log(this.formData.attachment)
      this.formData.attachment.push(res.data.path)
    },
    handleRemove (file) {
    // 删除
      console.log('handleRemove')
      console.log(file)
    },
    handlePictureCardPreview (file) {
      console.log('handlePictureCardPreview')
      console.log(file)
      // this.dialogImageUrl = file.url
      // this.dialogVisible = true
    },
    handleDownload (file) {
      console.log('handleDownload')
      console.log(file)
    }
  },
  filters: {
    'formatDate' (timeStamp) {
      if (timeStamp > 1000000000000 || timeStamp < 1000000000000) {
        const date = new Date(timeStamp)
        // return date.toLocaleString() // 使用默认的日期和时间格式
        const year = date.getFullYear()
        const month = (date.getMonth() + 1).toString().padStart(2, '0') // 补零
        const day = date.getDate().toString().padStart(2, '0')
        const hours = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')
        const seconds = date.getSeconds().toString().padStart(2, '0')
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
      } else {
        return '-'
      }
    }
  },
  created () {
    // 1 初始化数据
    // 1.1 获取项目细项详情数据
    const id = this.$route.query.id
    const projectId = this.$route.query.project_id
    if (id > 0) {
      // 获取item数据
      try {
        axios.post('/admin/item/detail', { id: id }).then((res) => {
          if (res.data.code === 0) {
            console.log(res.data)
            // 赋值给formData
            this.formData = res.data.data
          }
        })
      } catch (error) {
        alert('系统错误')
      }
    } else if (projectId > 0) {
      // 获取项目数据
      try {
        axios.post('/admin/project/detail', { id: projectId }).then((res) => {
          if (res.data.code === 0) {
            console.log(res.data)
            // 赋值给formData
            // this.formData = {}
            this.formData.project_id = res.data.data.id // 35
            this.formData.org_id = res.data.data.org_id // 1
          }
        })
      } catch (error) {
        alert('系统错误')
      }
    }
  }
}
</script>
