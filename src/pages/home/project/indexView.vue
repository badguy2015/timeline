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
      <!-- <el-table-column prop="is_delete" label="是否已删除"></el-table-column> -->
      <el-table-column prop="cat_id" label="分类id"> </el-table-column>
      <!-- <el-table-column prop="org_id" label="组织id"> </el-table-column> -->
      <el-table-column prop="top" label="置顶"> </el-table-column>
      <el-table-column prop="sort" label="排序"> </el-table-column>
      <el-table-column prop="desc" label="备注"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="250">
        <template slot-scope="scope">
          <el-button @click="detail(scope.row.id)" type="text">详情</el-button>
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
    // 2.1 详情
    detail (id) {
      this.$router.push({ path: '/home/project/detail', query: { project_id: id } })
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
