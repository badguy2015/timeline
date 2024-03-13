<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="date" label="id" width="150">
      </el-table-column>
      <el-table-column prop="name" label="标题" width="120"> </el-table-column>
      <el-table-column prop="province" label="开始时间" width="120">
      </el-table-column>
      <el-table-column prop="city" label="结束时间" width="120"> </el-table-column>
      <el-table-column prop="address" label="事项数" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="是否已删除" width="120"> </el-table-column>
      <el-table-column prop="zip" label="分类id" width="120"> </el-table-column>
      <el-table-column prop="zip" label="组织id" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <router-link to="/home/project/detail">详情</router-link>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  created () {
    console.log('created_indexView')
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  },
  data () {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  }
}
</script>
