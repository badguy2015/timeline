<template>
  <div>
    <el-table :data="list" style="width: 100%">
      <el-table-column fixed prop="id" label="id"> </el-table-column>
      <el-table-column fixed prop="org_id" label="组织ID"></el-table-column>
      <el-table-column prop="project_id" label="项目名称"></el-table-column>
      <el-table-column prop="title" label="标题"> </el-table-column>
      <!-- <el-table-column prop="content" label="内容"> </el-table-column> -->
      <el-table-column prop="time_show_type" label="时间格式"> </el-table-column>
      <!-- <el-table-column prop="attachment" label="附件"> </el-table-column> -->
      <el-table-column prop="time" label="发生时间"> </el-table-column>
      <el-table-column prop="is_delete" label="是否已删除"></el-table-column>
      <el-table-column prop="create_time" label="更新时间">
        <template slot-scope="scope">
          {{ scope.row.create_time | formatDate }}
        </template>
        </el-table-column>
      <el-table-column prop="update_time" label="更新时间">
        <template slot-scope="scope">
          {{ scope.row.update_time | formatDate }}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row.id)" type="text">编辑</el-button>
          <el-button @click="remove(scope.row.id, list, scope.$index)" type="text">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <el-row>
      <el-pagination layout="sizes, total, prev, pager, next, jumper"
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
      list: [
        {
          id: 0,
          org_id: 1,
          project_id: 0,
          create_time: 1708442013,
          update_time: 1708442013,
          title: 'abc',
          content: 'abc',
          time_show_type: 'Y-m-d H:i:s',
          attachment: 'Y-m-d H:i:s',
          time: 0,
          is_delete: 1
        }
      ],
      where: {},
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
        axios.post('/admin/item/index', { ...this.pages, ...this.where }).then((res) => {
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
    // 1.2 分页处理
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
      this.$router.push({ path: '/admin/item/edit', query: { id: id } })
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
    doRemove (id, list, index) {
      try {
        axios.post('/admin/item/del', { id: id }).then((res) => {
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
      if (timeStamp) {
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
  created () {
    this.getList()
  }
}
</script>
