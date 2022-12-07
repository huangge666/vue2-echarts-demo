<template>
  <div class="home-individual-bar-chart">
    <div class="title">
      <img class="icon" src="../assets/images/individual-icon.png" alt="">
      <div>{{title}}</div>

      <div class="years">
        <div v-for="year in years" :key="year" class="year" :class="{active: year == activeYear}">{{year}}</div>
      </div>
    </div>
    <div class="sum">
      <div class="count">{{4863}}</div>
      <BasePercent style="margin-bottom: 8px;" :isDown="true" num="4.0 (5%)"></BasePercent>
    </div>
    <div id="home-individual-bar-chart"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  import { AXIS_LABEL, SPLIT_NUMBER, xAxisData } from "@/config/echart";
  import BasePercent from "./common/BasePercent";
  export default {
    name: 'HomeIndividualBarChart',
    components: {
      BasePercent
    },
    props: {
      title: {
        type: String,
        default: "每台训练小时数【小时】"
      }
    },
    data() {
      return {
        myChart: null,
        option: null,
        resultData: {
          currentYear: [40, 132, 101, 134, 90, 600, 210, 132, 101, 134, 90, 230],
          oldYear: [40, 132, 101, 134, 90, 600, 210, 132, 101, 134, 90, 230].map(item => {
            return -item
          }).reverse()
        },
        years: [new Date().getFullYear() - 1, new Date().getFullYear()],
        activeYear: new Date().getFullYear(),
      };
    },

    mounted() {
      let myChart = echarts.init(document.getElementById("home-individual-bar-chart"));
      let option = {
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            const dotaDta = '<span style="display:inline-block;margin-right:5px;border-radius:20px;width:10px;height:10px;background-color:#666"></span>'
            return `<div>
                      <div style="color: #333;">每台训练小时数</div>
                      <div>${dotaDta}${params.seriesName}年${params.name} <span style="margin-left:10px;color: #333;font-weight: bold;">${Math.abs(params.value)}</span></div>
                    </div>`
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
              show: false,
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
            axisLabel: {
              ...AXIS_LABEL,
              formatter: function (params) {
                if (params < 0) {
                  return -params
                } else {
                  return params
                }
              }
            }
          }
        ],
        series: [
          {
            name: '2022',
            type: 'bar',
            stack: 'Total',
            label: {
              show: false,
              position: 'left'
            },
            emphasis: {
              focus: 'series'
            },
            barWidth: "15",
            itemStyle: {
              borderRadius: [25, 25, 25, 25],
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#5581F1' },
                { offset: 1, color: '#1153FC' }
              ])
            },
            data: this.resultData.currentYear,
          },
          {
            name: '2021',
            type: 'bar',
            stack: 'Total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            barWidth: "20",
            itemStyle: {
              borderRadius: [25, 25, 25, 25],
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2AD4AE' },
                { offset: 1, color: '#28BFC5' }
              ])
            },
            data: this.resultData.oldYear,
          }
        ]
      };
      option && myChart.setOption(option);
      this.myChart = myChart;
      this.option = option;
    },
  };
</script>

<style lang="scss" scoped>
  .home-individual-bar-chart {
    color: #333333;
    .title {
      position: relative;
      display: flex;
      align-items: center;
      font-size: 24px;
      font-weight: 500;
      .icon {
        margin-right: 10px;
      }

      .years {
        position: absolute;
        display: flex;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;

        .year {
          /* cursor: pointer; */
          padding: 5px 18px;
          font-size: 14px;
          font-weight: 400;
          color: #ffffff;
          background: linear-gradient(270deg, #2ad4ae 0%, #28bfc5 100%);
          border-radius: 18px 18px 18px 18px;

          &.active {
            background: linear-gradient(270deg, #5581f1 0%, #1153fc 100%);
          }

          & + .year {
            margin-left: 10px;
          }
        }
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
  #home-individual-bar-chart {
    width: 100%;
    height: 330px;
  }
</style>