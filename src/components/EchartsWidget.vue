<template>
  <div style="width: 100%;height: 100%;z-index: 100"></div>
</template>
<script>
import 'echarts-liquidfill'
export default {
  name: 'EchartsWidget',
  data() {
    return {
      chart: null
    }
  },
  props: {
    chartOption: {
      type: Object,
      default: null
    }
  },
  watch: {
    chartOption: {
      deep: true,
      handler(newVal) {
        this.setOptions(newVal)
      }
    }
  },
  methods: {
    resizeHandler() {
      this.chart.resize()
    },
    initChart() {
      this.chart = this.$echarts.init(this.$el)
      this.chartOption && this.chart.setOption(this.chartOption)
      this.chart.on('click', this.handleClick)
    },
    handleClick(params) {
      this.$emit('click', params)
    },
    setOptions(option) {
      this.clearChart()
      this.resizeHandler()
      if (this.chart) {
        this.chart.setOption(option)
      }
    },
    refresh() {
      this.setOptions(this.chartOption)
    },
    clearChart() {
      this.chart && this.chart.clear()
    }
  },
  mounted() {
    this.initChart()
    if (this.autoResize) {
      window.addEventListener('resize', this.resizeHandler)
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.resizeHandler)
    }
    this.chart.dispose()
    this.chart = null
  }
}
</script>

<style scoped>
</style>
