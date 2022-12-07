<template>
  <el-container style="height:100%">
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'Vue-Home',
    components: {
    },
    data() {
      return {

      };
    },

    mounted() {

    },

    methods: {

    },
  };
</script>

<style lang="scss" scoped>
  .el-header {
    background-color: black;
  }

  .el-main {
    padding-top: 0;
  }

  .el-container {
    height: 100vh;
  }
</style>