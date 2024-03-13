<template>
  <div>
    <el-table :data="list" style="width: 100%">
      <el-table-column fixed prop="id" label="id"> </el-table-column>
      <el-table-column fixed prop="title" label="标题"></el-table-column>
      <el-table-column prop="start_time" label="开始时间">
        <template slot-scope="scope">
                {{ scope.row.start_time | formatDate }}
        </template>
      </el-table-column>
      <el-table-column prop="end_time" label="结束时间">
        <template slot-scope="scope">
          {{  scope.row.end_time | formatDate  }}
        </template>
      </el-table-column>
      <el-table-column prop="item_qty" label="事项数"> </el-table-column>
      <el-table-column prop="is_delete" label="是否已删除"></el-table-column>
      <el-table-column prop="cat_id" label="分类id"> </el-table-column>
      <el-table-column prop="org_id" label="组织id"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row.id)" type="text">编辑</el-button>
          <el-button @click="remove(scope.row.id, list, scope.$index)" type="text">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <el-row>
      <el-pagination layout="sizes,total, prev, pager, next,jumper"
      background
      :page-sizes="[10,20,50,100]"
      :page-size="pages.pageSize"
      :total="pages.totalCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      >
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: [],
      pages: {
        page: 1,
        pageSize: 10,
        totalCount: 0
      }
    }
  },
  methods: {
    // 1 列表
    getList () {
      try {
        axios.post('/admin/project/index', { page: this.pages.page, pageSize: this.pages.pageSize }).then((res) => {
          // 接口异常提示
          if (res.data.code !== 0) {
            this.$message({
              showClose: true,
              message: res.data.msg,
              type: 'error'
            })
            return
          }
          // 空数据提示
          if (Array.from(res.data.data.list).length === 0) {
            this.pages.totalCount = 0
            this.$message({
              showClose: true,
              message: '暂无数据',
              type: 'success'
            })
          } else {
            // 把获取到的列表数据传给tableData.
            this.list = res.data.data.list
            this.pages = res.data.data.pages
          }
        })
      } catch (error) {
        alert('系统错误')
      }
    },
    // 1.1 分页处理
    handleSizeChange (pageSize) {
      // console.log(`每页 ${pageSize} 条`)
      this.pages.page = 1
      this.pages.pageSize = pageSize
      this.getList()
    },
    handleCurrentChange (page) {
      // console.log(`当前页: ${page}`)
      this.pages.page = page
      this.getList()
    },
    // 2 编辑
    edit (id) {
      // 使用编程式导航进行重定向 /admin/project/edit?id=4
      this.$router.push({ path: '/admin/project/edit', query: { id: id } })
    },
    // 3 删除
    remove (id, list, index) {
      console.log(id, list, index)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.doRemove(id, list, index)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '未执行任何操作'
        })
      })
    },
    // 3.1 删除
    doRemove (id, list, index) {
      try {
        axios.post('/admin/project/del', { id: id }).then((res) => {
          // 接口异常提示
          if (res.data.code !== 0) {
            this.$message({
              showClose: true,
              message: res.data.msg,
              type: 'error'
            })
            return
          }
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: 'success'
          })
          // 界面移除
          list.splice(index, 1)
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
      }
      return '-'
    }
  },
  beforeCreate () {
    console.log('projectIndexView_beforeCreate_234')
    // this.getList()
  },
  created () {
    console.log('projectIndexView__created_234')
    this.getList()
  },
  beforeMount () {
    console.log('projectIndexView__beforeMount_234')
    // this.getList()
  },
  mounted () {
    console.log('projectIndexView__mounted_234')
    // this.getList()
  }
}
</script>

// basic
// form
// Data
// Notice
// Navigation
// Other
