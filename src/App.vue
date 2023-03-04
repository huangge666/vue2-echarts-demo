<template>
  <div id="app"
       ref="appRef">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import drawMixin from "./mixin/drawMixin"; // 自适应缩放
export default {
  name: "App",
  mixins: [drawMixin],
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

/* #app {
  height: 100vh;
} */
#app {
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  overflow: hidden; /*必要属性，否则宽度在windowresize的时候获取会减去滚动条的宽度*/
}
</style>
