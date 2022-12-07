<template>
  <div class="screen-container">
    <div class="screen-content" ref="screenRef">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import windowResize from "@/utils/resize";
  export default {
    name: "Layout",
    data() {
      return {
        calcRate: null,
        windowDraw: null,
        unWindowDraw: null,
      }
    },
    mounted() {
      const { calcRate, windowDraw, unWindowDraw } = windowResize(this.$refs['screenRef']);
      this.calcRate = calcRate;
      this.windowDraw = windowDraw;
      this.unWindowDraw = unWindowDraw;

      // 监听浏览器窗口尺寸变化
      this.windowDraw()
      this.calcRate()
    },
    destroyed() {
      this.unWindowDraw();
    },
  }
</script>

<style lang="scss" scoped>
  .screen-container {
    height: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .screen-content {
    box-sizing: border-box;
    width: 1920px;
    height: 1080px;
    background: #f4f6fc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>