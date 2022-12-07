<template>
  <div id="home-bar-chart" class="home-bar-chart"></div>
</template>

<script>
  import * as echarts from 'echarts';
  import { LINE_STYLE, AXIS_LABEL, SPLIT_NUMBER, xAxisData } from "@/config/echart";
  export default {
    name: 'HomeBarChart',
    data() {
      return {
        myChart: null,
        option: null,
        lineStyle: {
          color: "#F4F6FC",
          width: 2,
          type: "solid",
        }
      };
    },

    mounted() {
      let myChart = echarts.init(document.getElementById("home-bar-chart"));
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '0',
          right: '0',
          bottom: '20',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: xAxisData,
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              // lineStyle: this.lineStyle,
              lineStyle: LINE_STYLE,
            },
            axisLabel: AXIS_LABEL
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitNumber: SPLIT_NUMBER,
            axisLine: {
              show: true,
              lineStyle: this.lineStyle,
            },
            splitLine: {
              show: false
            },
            axisLabel: AXIS_LABEL
          }
        ],
        series: [
          {
            name: '外送时长',
            type: 'bar',
            barWidth: 28,
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#5581F1' },
                { offset: 1, color: '#1153FC' }
              ])
            },
            data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230],
          },
          {
            name: '运营时长',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            itemStyle: {
              borderRadius: [25, 25, 0, 0],
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2AD4AE' },
                { offset: 1, color: '#28BFC5' }
              ])
            },
            data: [150, 232, 201, 154, 190, 330, 410, 232, 201, 154, 190, 330]
          }
        ]
      };
      option && myChart.setOption(option);
      this.myChart = myChart;
      this.option = option;
    },
    methods: {

    },
  };
</script>

<style lang="scss" scoped>
  #home-bar-chart {
    width: 100%;
    height: 100%;
  }
</style>