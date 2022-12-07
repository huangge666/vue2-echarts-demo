<template>
  <div class="utilization-table-echart">
    <div class="header">
      <div class="title">模拟机利用率</div>
      <div class="btns">
        <el-button size="mini" @click="showFilterJX()">自定义机型</el-button>
        <el-button size="mini" @click="showHighlightDialog=true">自定义基准线</el-button>
      </div>
    </div>

    <div class="table-content">
      <el-table :data="dataList" style="width: 100%" header-row-class-name="tr-header">
        <el-table-column prop="jx" width="180">
        </el-table-column>
        <el-table-column prop="1" label="一月" min-width="80">
          <template slot-scope="{ row }">
            <div v-if="isShowTag(row['1'])">
              <el-tag class="table-tag" :color="tagColor" effect="dark" type="success">{{row['1']}}</el-tag>
            </div>
            <div v-else>{{row['1']}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="2" label="二月" min-width="80">
          <template slot-scope="{ row }">
            <div v-if="row['2'] < jzx">
              <el-tag class="table-tag" :color="tagColor" effect="dark" type="success">{{row['2']}}</el-tag>
            </div>
            <div v-else>{{row['2']}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="3" label="三月" min-width="80">
          <template slot-scope="{ row }">
            <div v-if="isShowTag(row['3'])">
              <el-tag class="table-tag" :color="tagColor" effect="dark" type="success">{{row['3']}}</el-tag>
            </div>
            <div v-else>{{row['3']}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="4" label="四月" min-width="80">
          <template slot-scope="{ row }">
            <div v-if="isShowTag(row['4'])">
              <el-tag class="table-tag" :color="tagColor" effect="dark" type="success">{{row['4']}}</el-tag>
            </div>
            <div v-else>{{row['4']}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="5" label="五月" min-width="80">
          <template slot-scope="{ row }">
            <div v-if="isShowTag(row['5'])">
              <el-tag class="table-tag" :color="tagColor" effect="dark" type="success">{{row['5']}}</el-tag>
            </div>
            <div v-else>{{row['5']}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="6" label="六月" min-width="80">
          <template slot-scope="{ row }">
            <div v-if="isShowTag(row['6'])">
              <el-tag class="table-tag" :color="tagColor" effect="dark" type="success">{{row['6']}}</el-tag>
            </div>
            <div v-else>{{row['6']}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="7" label="七月" min-width="80">
          <template slot-scope="{ row }">
            <div v-if="isShowTag(row['7'])">
              <el-tag class="table-tag" :color="tagColor" effect="dark" type="success">{{row['7']}}</el-tag>
            </div>
            <div v-else>{{row['7']}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="8" label="八月" min-width="80">
          <template slot-scope="{ row }">
            <div v-if="isShowTag(row['8'])">
              <el-tag class="table-tag" :color="tagColor" effect="dark" type="success">{{row['8']}}</el-tag>
            </div>
            <div v-else>{{row['8']}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="9" label="九月" min-width="80">
          <template slot-scope="{ row }">
            <div v-if="isShowTag(row['9'])">
              <el-tag class="table-tag" :color="tagColor" effect="dark" type="success">{{row['9']}}</el-tag>
            </div>
            <div v-else>{{row['9']}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="10" label="十月" min-width="80">
          <template slot-scope="{ row }">
            <div v-if="isShowTag(row['10'])">
              <el-tag class="table-tag" :color="tagColor" effect="dark" type="success">{{row['10']}}</el-tag>
            </div>
            <div v-else>{{row['10']}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="11" label="十一月" min-width="80">
          <template slot-scope="{ row }">
            <div v-if="isShowTag(row['11'])">
              <el-tag class="table-tag" :color="tagColor" effect="dark" type="success">{{row['11']}}</el-tag>
            </div>
            <div v-else>{{row['11']}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="12" label="十二月" min-width="80">
          <template slot-scope="{ row }">
            <div v-if="isShowTag(row['12'])">
              <el-tag class="table-tag" :color="tagColor" effect="dark" type="success">{{row['12']}}</el-tag>
            </div>
            <div v-else>{{row['12']}}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 通过使用 element-ui的组件样式 实现表格内嵌套图表的效果 -->
    <div class="el-table echarts">
      <div class="el-table__row">
        <div class="cell">单月综合利用率</div>
        <div id="monthly-echart" class="echart"></div>
      </div>
      <div class="el-table__row">
        <div class="cell">累计综合利用率</div>
        <div id="total-echart" class="echart"></div>
      </div>
    </div>

    <el-dialog append-to-body :close-on-press-escape="false" :show-close="false" :close-on-click-modal="false" title="提示" :visible.sync="showFilterJXBool" width="30%" center>
      <el-select v-model="selectJXValue" multiple placeholder="请选择">
        <el-option v-for="item in tableData" :key="item.jx" :label="item.jx" :value="item.jx">
        </el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancalJXBool()">取 消</el-button>
        <el-button type="primary" @click="showFilterJXBool = false;filterJXEvent()">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog append-to-body :close-on-press-escape="false" :show-close="false" :close-on-click-modal="false" title="提示" :visible.sync="showHighlightDialog" width="30%" center>
      <el-input placeholder="请输入内容" v-model.number="inputJzx" type="number" clearable>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showHighlightDialog = false">取 消</el-button>
        <el-button type="primary" @click="showHighlightDialog = false;jzx=inputJzx">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { xAxisData } from "@/config/echart";
  import * as echarts from 'echarts';
  export default {
    name: "UtilizationTableEchart",
    data() {
      return {
        tagColor: "#2AD4AE",
        myChart: null,
        myChart2: null,
        tableData: [{
          jx: "华为",
          1: 12.20,
          2: 12.20,
          3: 12.20,
          4: 11.20,
          5: 12.20,
          6: 12.20,
          7: 12.20,
          8: 12.20,
          9: 12.20,
          10: 12.20,
          11: 12.20,
          12: 12.20,
        }, {
          jx: "小米",
          1: 12.20,
          2: 12.20,
          3: 12.20,
          4: 11.20,
          5: 12.20,
          6: 12.20,
          7: 12.20,
          8: 12.20,
          9: 12.20,
          10: 12.20,
          11: 12.20,
          12: 12.20,
        }, {
          jx: "vivo",
          1: 12.20,
          2: 12.20,
          3: 12.20,
          4: 11.20,
          5: 12.20,
          6: 12.20,
          7: 12.20,
          8: 12.20,
          9: 12.20,
          10: 12.20,
          11: 12.20,
          12: 12.20,
        }, {
          jx: "oppo",
          1: 12.20,
          2: 12.20,
          3: 12.20,
          4: 11.20,
          5: 12.20,
          6: 12.20,
          7: 12.20,
          8: 12.20,
          9: 12.20,
          10: 12.20,
          11: 12.20,
          12: 12.20,
        }],
        jzx: 12,
        showFilterJXBool: false,
        selectJXValue: [],
        filterJXValue: [],
        isFilter: false,
        showHighlightDialog: false,
        inputJzx: 0,
        grid: Object.freeze({
          top: 8,
          left: 22,
          right: 110,
          bottom: 0,
        }),
        tooltip: Object.freeze({
          trigger: 'item',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          position: [0, 0],
          formatter: function (params) {
            return `${params.name}:${Math.abs(params.value)}`
          }
        }),
      }
    },
    mounted() {
      let myChart = echarts.init(document.getElementById('monthly-echart'));
      let data1 = [10, 10, 20, 50, 4, 5, 6, 7, 8, 9, 10, 11];
      let option;
      option = {
        tooltip: this.tooltip,
        grid: this.grid,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            show: false,
            axisTick: { alignWithLabel: true },
            data: xAxisData,
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: false
          }
        ],
        series: [
          {
            name: '单月综合利用率',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            itemStyle: {
              normal: {
                color: '#2784FF', //改变折线点的颜色
                lineStyle: {
                  color: '#2784FF' //改变折线颜色
                }
              }
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(39,132,255,0.3)' // 0% 处的颜色
                }, {
                  offset: 0.3, color: 'rgba(39,132,255,0.3)' // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(39,132,255,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            emphasis: {
              focus: 'series'
            },
            data: data1
          }
        ]
      };
      option && myChart.setOption(option);
      this.myChart = myChart;

      // total-echart
      let myChart2 = echarts.init(document.getElementById('total-echart'));
      let option2 = {
        tooltip: this.tooltip,
        grid: this.grid,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            show: false,
            axisTick: { alignWithLabel: true },
            data: xAxisData,
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: false
          }
        ],
        series: [
          {
            name: '累计综合利用率',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            itemStyle: {
              normal: {
                color: '#FF5B27', //改变折线点的颜色
                lineStyle: {
                  color: '#FF5B27' //改变折线颜色
                }
              }
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(255,91,39,0.3)' // 0% 处的颜色
                }, {
                  offset: 0.3, color: 'rgba(255,91,39,0.3)' // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(255,91,39,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            emphasis: {
              focus: 'series'
            },
            data: data1.reverse()
          }
        ]
      };
      option2 && myChart2.setOption(option2);
      this.myChart2 = myChart2;
    },
    computed: {
      dataList() {
        const { tableData, isFilter } = this;

        if (!isFilter) return tableData;

        const result = this.filterJXValue.map(val => {
          return tableData.find(data => data.jx == val);
        })
        return result;
      },
    },
    methods: {
      isShowTag(value) {
        let { jzx } = this;
        return value < jzx;
      },
      filterJXEvent() {
        this.isFilter = true;
        this.filterJXValue = [...this.selectJXValue];
      },
      cancalJXBool() {
        this.showFilterJXBool = false;
        this.selectJXValue = [...this.filterJXValue];
      },
      showFilterJX() {
        this.showFilterJXBool = true;
      },
    },
  }
</script>

<style lang="scss" scoped>
  .utilization-table-echart {
    .header {
      display: flex;
      justify-content: space-between;
      padding: 30px 30px 10px;
      border-bottom: 1px solid #ebeef5;

      .title {
        color: #333333;
        font-weight: bold;
        font-size: 24px;
      }
    }

    .echarts {
      .el-table__row {
        height: 48px;
        display: flex;
        border-bottom: 1px solid #ebeef5;
      }

      .cell {
        width: 180px;
        line-height: 48px;
      }

      .echart {
        height: 48px;
        flex: 1;
      }
    }

    ::v-deep .tr-header {
      color: #000000;
      font-weight: bold;
    }

    .table-tag {
      border-color: #2ad4ae;
    }
  }
</style>