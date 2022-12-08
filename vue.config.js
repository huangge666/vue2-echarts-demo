const path = require("path");
const { defineConfig } = require("@vue/cli-service");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production"
      ? `${process.env.VUE_APP_BASE_API}/`
      : "/",
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false,
  transpileDependencies: true,
  devServer: {
    host: "0.0.0.0",
    port: 8888,
    // proxy: {
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: `http://10.0.0.202:8080`,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ["^" + process.env.VUE_APP_BASE_API]: "",
    //     },
    //   },
    // },
  },
  configureWebpack: () => {
    const configureWebpack = {
      name: "vue-echarts-demo",
      resolve: {
        alias: {
          "@": resolve("src"),
        },
      },
      plugins: [],
    };
    return configureWebpack;
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/sass/util.scss";`,
      },
    },
  },
});
