<template>
<el-dropdown @command="handleCommand">
  <el-button type="primary">
    menu<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="show">詳細閲覧</el-dropdown-item>
    <el-dropdown-item command="edit">編集</el-dropdown-item>
    <el-dropdown-item command="copy">コピー</el-dropdown-item>
    <el-dropdown-item command="delete">削除</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</template>

<script>
// https://element.eleme.io/#/en-US/component/dropdown

export default {
  methods: {
    handleCommand(command) {
      this.$message('click on item' + command)
    },
  },
}
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.4.11/lib/theme-chalk/index.css");
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>

