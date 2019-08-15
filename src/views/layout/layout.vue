<template>
  <el-container class="container">
    <el-aside class="aside">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title">
            <!-- <i class="el-icon-message"></i> -->
            <span>后台管理系统</span>
          </template>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-home"></i>
            <router-link to="/homepage">
              <span>主页</span>
            </router-link>
          </template>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-management"></i>
            <span>权限管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <i class="el-icon-s-custom"></i>
              <router-link to="/userManagement">
                <span>用户管理</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-s-check"></i>
              <router-link to="/roleManagement">
                <span>角色管理</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-s-operation"></i>
              <router-link to="/sectionManagement">
                <span>部门管理</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
              <i class="el-icon-menu"></i>
              <router-link to="/menuManagement">
                <span>菜单管理</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-5">
              <i class="el-icon-s-claim"></i>
              <router-link to="/postManagement">
                <span>岗位管理</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-6">
              <i class="el-icon-s-order"></i>
              <router-link to="/lesseeManagement">
                <span>租户管理</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-7">
              <i class="el-icon-s-promotion"></i>
              <router-link to="/socialContactManagement">
                <span>社交账号管理</span>
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-s-platform"></i>
            <span>系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">
              <i class="el-icon-tickets"></i>
              <router-link to="/journalManagement"><span>日志管理</span></router-link>
            </el-menu-item>
            <el-menu-item index="4-2">
              <i class="el-icon-edit-outline"></i>
              <router-link to="/dictionariesManagement"><span>字典管理</span></router-link>
            </el-menu-item>
            <el-menu-item index="4-3">
              <i class="el-icon-notebook-1"></i>
              <router-link to="/codeGeneration"><span>代码生成</span></router-link>
            </el-menu-item>
            <el-menu-item index="4-4">
              <i class="el-icon-sunrise"></i>
              <router-link to="/abnormalLog"><span>异常日志</span></router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="header">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <el-main>
        <router-view ></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "heard",
  components: {},
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  display: flex;
  height: 100%;
  // border: 1px solid #eee;
  .aside {
    width: 210px !important;
    height: 100%;
    background-color: #1f2d3d !important;
  }
}

/deep/.el-menu {
  width: 100%;
  height: 100%;
  background-color: rgb(48, 65, 86);
  color: rgb(191, 203, 217);
}
/deep/.el-submenu__title {
  color: rgb(191, 203, 217);
}
/deep/.el-menu-item {
  font-size: 14px;
  color: rgb(191, 203, 217);
}
/deep/.el-menu-item.is-active {
  color: #409eff;
  // background-color: #001329;
}
// /deep/.is-active {
//   background-color: #243347
// }
/deep/.el-menu-item-group__title {
  padding: 0;
  line-height: normal;
  font-size: 12px;
  color: #909399;
}

.header {
  text-align: right;
  font-size: 12px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
a{
  color: #b3c0d1;
}
/deep/.router-link-exact-active span{
  color: #409eff;
}
a:active {
    text-decoration: none;
    color: #409eff;
}
</style>