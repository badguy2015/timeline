<template>
  <div>
    <el-form ref="form" :model="formData" label-width="80px">
      <el-form-item label="组织ID">
        <el-input v-model="formData.org_id"></el-input>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="formData.project_id"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="formData.cat_id" placeholder="请选择分类">
          <el-option  v-for="p in parent_list" :key="p.id" :label="p.name" :value="p.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="formData.desc"></el-input>
      </el-form-item>
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
        org_id: '',
        title: '',
        cat_id: '',
        desc: ''
      },
      parent_list: []
    }
  },
  methods: {
    // 1 表单提交
    async submitForm () {
      try {
        let handleUrl = '/admin/project/add'
        if (this.formData.id >= 0) {
          handleUrl = '/admin/project/edit'
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
              this.$router.push({ path: '/admin/project/index' })
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
  created () {
    // 1 初始化数据
    // 1.1 获取分类数据
    try {
      axios.post('/admin/category/index', { parent_id: 0 }).then((res) => {
        if (res.data.code === 0) {
          console.log(res.data)
          this.parent_list = res.data.data.list
        }
      })
    } catch (error) {
      alert('系统错误')
    }
    const id = this.$route.query.id
    if (id >= 0) {
      // 1.2 获取项目详情数据
      try {
        axios.post('/admin/project/detail', { id: id }).then((res) => {
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
