<template>
  <div class="home-pictorial-bar-chart">
    <div class="title">
      <img class="icon" src="../assets/images/accumulate-icon.png" alt="">
      <div>{{title}}</div>
    </div>
    <div class="sum">
      <div class="count">{{30}}</div>
      <BasePercent style="margin-bottom: 8px;" :isDown="false" num="4.0 (5%)"></BasePercent>
    </div>
    <div id="home-pictorial-bar-chart"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  import { LINE_STYLE, AXIS_LABEL, SPLIT_NUMBER, xAxisData } from "@/config/echart";
  import BasePercent from "./common/BasePercent";
  export default {
    name: 'HomePictorialBarChart',
    components: {
      BasePercent
    },
    props: {
      title: {
        type: String,
        default: "累计训练小时数"
      }
    },
    data() {
      return {
        feijiIcon: require("@/assets/images/feiji.png"),
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
      let myChart = echarts.init(document.getElementById("home-pictorial-bar-chart"));
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: "40",
          left: "0",
          right: "0",
          bottom: "20",
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
            name: '累计训练小时数',
            type: 'pictorialBar',
            symbol: `image://${this.feijiIcon}`,
            symbolRepeat: true,
            symbolClip: "true",
            symbolSize: [30, 25],
            symbolPosition: "start",
            data: [40, 132, 101, 134, 90, 600, 210, 132, 101, 134, 90, 230],
          },
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
  .home-pictorial-bar-chart {
    color: #333333;
    .title {
      display: flex;
      align-items: center;
      font-size: 24px;
      font-weight: 500;
      .icon {
        margin-right: 10px;
      }
    }

    .sum {
      margin-top: 30px;
      display: flex;
      align-items: flex-end;
      .count {
        font-size: 54px;
        font-weight: bold;
        margin-right: 30px;
      }
    }
  }
  #home-pictorial-bar-chart {
    width: 100%;
    height: 330px;
  }
</style>