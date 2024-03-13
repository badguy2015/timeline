<template>
  <!-- <div class="about">
    <h1>/admin/indexView</h1>
    <el-row>
      <router-link to="/admin/category/index">admin/category/index</router-link><br/>
      <router-link to="/admin/category/add">admin/category/add</router-link><br/>
      <router-link to="/admin/category/edit">admin/category/edit</router-link><br/>
      <router-link to="/admin/project/index">admin/project/index</router-link><br/>
      <router-link to="/admin/project/add">admin/project/add</router-link><br/>
      <router-link to="/admin/project/edit">admin/project/edit</router-link><br/>
    </el-row>
    <el-row>
      <router-view></router-view>
    </el-row>
  </div> -->
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="230px">
          <el-row>
            <el-menu router>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-s-order"></i>
                  <span>分类</span>
                </template>
                <el-menu-item index="/admin/category/index"><i class="el-icon-chat-line-square"></i>列表</el-menu-item>
                <!-- <el-menu-item index="/admin/category/edit"><i class="el-icon-edit-outline"></i>编辑</el-menu-item> -->
                <el-menu-item index="/admin/category/add"><i class="el-icon-edit"></i> 添加</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-s-cooperation"></i>
                  <span>项目相关</span>
                </template>
                <el-menu-item-group>
                <template slot="title"><i class="el-icon-s-operation"></i>项目</template>
                <el-menu-item index="/admin/project/index"><i class="el-icon-chat-line-square"></i>列表</el-menu-item>
                <!-- <el-menu-item index="/admin/project/edit"><i class="el-icon-edit-outline"></i>编辑</el-menu-item> -->
                <el-menu-item index="/admin/project/add"><i class="el-icon-edit"></i> 添加</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                <template slot="title"><i class="el-icon-s-operation"></i>项目细项</template>
                <el-menu-item index="/admin/project/item/index"><i class="el-icon-chat-line-square"></i>列表</el-menu-item>
                <el-menu-item index="/admin/project/item/edit"><i class="el-icon-edit-outline"></i>编辑</el-menu-item>
                <el-menu-item index="/admin/project/item/add"><i class="el-icon-edit"></i> 添加</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
            <el-menu>
              <el-menu-item index="3">
                <i class="el-icon-s-tools"></i>
                <span slot="title">配置</span>
              </el-menu-item>
            </el-menu>
            <el-menu>
              <el-menu-item index="4">
                <i class="el-icon-menu"></i>
                <span slot="title">其他</span>
              </el-menu-item>
            </el-menu>
          </el-row>
          <!-- <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="分类" name="1">
              <div>
                <router-link to="/admin/category/index">列表</router-link>
              </div>
              <div>
                <router-link to="/admin/category/add">添加</router-link>
              </div>
              <div>
                <router-link to="/admin/category/edit">编辑</router-link>
              </div>
            </el-collapse-item>
            <el-collapse-item title="项目" name="2">
              <div>
                <router-link to="/admin/category/index">列表</router-link>
              </div>
              <div>
                <router-link to="/admin/category/add">添加</router-link>
              </div>
              <div>
                <router-link to="/admin/category/edit">编辑</router-link>
              </div>
              <div>
                <el-collapse-item title="项目详情" name="3">
                  <div>
                    <router-link to="/admin/category/index">列表</router-link>
                  </div>
                  <div>
                    <router-link to="/admin/category/add">添加</router-link>
                  </div>
                  <div>
                    <router-link to="/admin/category/edit">编辑</router-link>
                  </div>
                </el-collapse-item>
              </div>
            </el-collapse-item>
          </el-collapse> -->
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
