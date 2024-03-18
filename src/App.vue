<template>
  <div id="app">
    <div hidden>
      <h2>=== demo start ===</h2>
      <button>原生按钮</button>
      <input type="text" />
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <!-- <el-row>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
      </el-row> -->
      <el-row>
        <router-link active-class="alive" to="/admin">admin</router-link><br />
        <router-link active-class="alive" to="/admin/category"
          >admin/category</router-link
        ><br />
        <router-link active-class="alive" to="/admin/category/index"
          >/admin/category/index</router-link
        ><br />
        <router-link active-class="alive" to="/admin/category/add"
          >/admin/category/add</router-link
        ><br />
        <router-link active-class="alive" to="/admin/category/edit"
          >/admin/category/edit</router-link
        ><br />

        <router-link active-class="alive" to="/admin/project"
          >/admin/project</router-link
        ><br />
        <router-link active-class="alive" to="/admin/project/index"
          >/admin/project/index</router-link
        ><br />
        <router-link active-class="alive" to="/admin/project/add"
          >/admin/project/add</router-link
        ><br />
        <router-link active-class="alive" to="/admin/project/edit"
          >/admin/project/edit</router-link
        ><br />
        <router-link active-class="alive" to="/admin/project/item"
          >/admin/project/item</router-link
        ><br />
        <router-link active-class="alive" to="/admin/project/item/index"
          >/admin/project/item/index</router-link
        ><br />
        <router-link active-class="alive" to="/admin/project/item/add"
          >/admin/project/item/add</router-link
        ><br />
        <router-link active-class="alive" to="/admin/project/item/edit"
          >/admin/project/item/edit</router-link
        ><br />

        <router-link active-class="alive" to="/home">home</router-link><br />
        <router-link active-class="alive" to="/home/project"
          >/home/project</router-link><br />
        <router-link active-class="alive" to="/home/project/index"
          >/home/project/index</router-link
        ><br />
        <router-link active-class="alive" to="/home/project/item/index"
          >/home/project/item/index</router-link
        ><br />
      </el-row>
      <el-row>
        <!-- <router-view></router-view> -->
      </el-row>
      <h2>=== demo end ===</h2>
    </div>
    <div>
      <router-view></router-view>  <!-- 里面的插件执行两次created -->
    </div>
  </div>
</template>
<style scoped>
.alive {
  color: red;
}
</style>

<script>

export default ({
  created () {
    console.log('app.vue.created') // 执行1次created
  },
  beforeMount () {
    console.log('app.vue.beforeMount')
  }
})
</script>
