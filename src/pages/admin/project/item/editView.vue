<template>
  <div>
    <el-form ref="form" :model="formData" label-width="80px" label-position="left">
      <el-form-item label="ID">
        <el-input v-model="formData.id"></el-input>
      </el-form-item>
      <el-form-item label="组织ID">
        <el-input v-model="formData.org_id"></el-input>
      </el-form-item>
      <el-form-item label="项目ID">
        <el-input v-model="formData.project_id"></el-input>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" rows="8" v-model="formData.content" laceholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="发生时间">
        <el-input v-model="formData.time"></el-input>
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
        <el-button>取消</el-button>
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
      },
      parent_list: []
    }
  },
  methods: {
    // 1 表单提交
    async submitForm () {
      try {
        let handleUrl = '/admin/category/add'
        if (this.formData.id >= 0) {
          handleUrl = '/admin/category/edit'
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
              this.$router.push({ path: '/admin/category/index' })
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
    }
  },
  filters: {
    'formatDate' (timeStamp) {
      if (timeStamp > 10000) {
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
    console.log('debug_123as')
    console.log(id)
    if (id >= 0) {
      // 获取项目数据
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
    }
  }
}
</script>
