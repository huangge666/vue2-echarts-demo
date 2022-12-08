<template>
  <div class="box">
  </div>
</template>

<script>
  export default {
    name: "Box",
  }
</script>

<style lang="scss" scoped="scoped">
  /* 
     直接使用 vw 和 vh 函数，将像素值传进去，得到的就是具体的 vw vh 单位   
     */
  .box {
    width: vw(300);
    height: vh(100);
    font-size: vh(16);
    background-color: black;
    margin-left: vw(10);
    margin-top: vh(10);
    border: vh(2) solid red;
  }
</style>