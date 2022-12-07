<template>
  <div>
    <div id="echart-one"></div>
    <div id="echart-two"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts';

  export default {
    name: 'PageOne',
    data() {
      return {
        feijiIcon: require("@/assets/images/feiji.png"),
        myChart: null,
      };
    },
    mounted() {
      var chartDom = document.getElementById('echart-one');
      this.myChart = echarts.init(chartDom);

      var xAxisData = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
      var data1 = [10, 10, 20, 50, 4, 5, 6, 7, 8, 9, 10, 11]; //上半部分的数据
      var data2 = []; //下半部分的数据
      data2 = data1.map((item) => {
        return -item
      }).reverse();

      var option = {
        backgroundColor: "#fff",
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            return `${params.name}:${Math.abs(params.value)}`
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true
            },
            axisLabel: {
              formatter: function (params) {
                if (params < 0) {
                  return -params
                } else {
                  return params
                }
              }
            },
            splitLine: {
              show: false
            }
          }
        ],
        xAxis: [
          {
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: xAxisData,
          }
        ],
        series: [
          {
            name: 'Income',
            type: 'bar',
            stack: 'Total',
            label: {
              show: false
            },
            emphasis: {
              focus: 'series'
            },
            barWidth: "15",
            itemStyle: {
              borderRadius: [25, 25, 25, 25]
            },
            data: data1
          },
          {
            name: 'Expenses',
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
              borderRadius: [25, 25, 25, 25]
            },
            data: data2
          }
        ]
      };

      option && this.myChart.setOption(option);

      var chartDomTwo = document.getElementById('echart-two');
      this.myChartTwo = echarts.init(chartDomTwo);

      var optionTwo = {
        backgroundColor: "#fff",
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true
            },
            splitLine: {
              show: false
            }
          }
        ],
        xAxis: [
          {
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: xAxisData,
          }
        ],
        series: [
          {
            name: 'Income',
            type: 'pictorialBar',
            stack: 'Total',
            symbol: `image://${this.feijiIcon}`,
            symbolRepeat: true,
            symbolClip: "true",
            symbolSize: [20, 18],
            symbolPosition: "start",
            data: data1
          },
        ]
      };

      optionTwo && this.myChartTwo.setOption(optionTwo);
    },
    methods: {

    },
  };
</script>

<style lang="scss" scoped>
  #echart-one,
  #echart-two {
    width: 600px;
    height: 350px;
  }
</style>