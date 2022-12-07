<template>
  <div class="main">
    <!-- 年份选择组件 -->
    <el-date-picker class="year-picker" v-model="yearActive" type="year" placeholder="选择年" format="yyyy" value-format="yyyy" size="mini">
    </el-date-picker>
    <div class="utilization">
      <div class="base-card ranking">
        <BaseRanking title="利用率最高排名Top4" :rootData="maxRanking" key="maxRanking" />
      </div>
      <div class="final">
        <div class="cards">
          <div class="card">
            <UtilizationCard key="totalUtilizationCardKey" title="累计总额和利用率" :iconSrc="totalIcon" num="15.93" percent="1.8" backgroundColor="linear-gradient(134deg, #5581F1 0%, #1153FC 100%)" />
          </div>
          <div class="card">
            <UtilizationCard key="maxUtilizationCardKey" title="最高利用率" subTitle="S76/592" :iconSrc="maxIcon" num="78.4" percent="1.8" backgroundColor="linear-gradient(134deg, #1DE5E2 0%, #B588F7 100%)" />
          </div>
        </div>
        <div class="cards">
          <div class="card">
            <UtilizationCard key="yearUtilizationCardKey" title="单年综合利用率" :iconSrc="yearUtilizationIcon" num="16.2" percent="1.8" backgroundColor="linear-gradient(134deg, #FFCB52 0%, #FF7B02 100%)" />
          </div>
          <div class="card">
            <UtilizationCard key="minUtilizationCardKey" title="最低利用率" subTitle="B777" :iconSrc="minUtilizationIcon" num="18.1" percent="1.8" backgroundColor="linear-gradient(312deg, #FFC540 0%, #FF58A4 100%)" />
          </div>
        </div>
      </div>
      <div class="base-card ranking">
        <BaseRanking title="利用率最低排名Top4" :rootData="minRanking" key="minRanking" color="#2AD4AE" />
      </div>
    </div>
    <div class="base-card table-echart">
      <UtilizationTableEchart />
    </div>
  </div>
</template>

<script>
  import BaseRanking from "@/components/final/BaseRanking.vue";
  import UtilizationCard from "@/components/final/UtilizationCard.vue";
  import UtilizationTableEchart from "@/components/final/UtilizationTableEchart.vue";
  export default {
    name: "Home",
    components: {
      BaseRanking,
      UtilizationCard,
      UtilizationTableEchart
    },
    data() {
      return {
        yearActive: new Date().getFullYear() + "",
        totalIcon: require("@/assets/images/累计总额和利用率.png"),
        maxIcon: require("@/assets/images/最高利用率.png"),
        yearUtilizationIcon: require("@/assets/images/单年综合利用率.png"),
        minUtilizationIcon: require("@/assets/images/最低利用率.png"),
        maxRanking: [
          {
            name: "S76/592",
            num: 78.4,
            id: "76592"
          },
          {
            name: "B7373NG",
            num: 70.12,
            id: "7373"
          },
          {
            name: "ERJ190",
            num: 66.01,
            id: "19066"
          },
          {
            name: "A330",
            num: 61.81,
            id: "33061"
          },
        ],
        minRanking: [
          {
            name: "B777",
            num: 18.1,
            id: "77718"
          },
          {
            name: "B737",
            num: 23.57,
            id: "73723"
          },
          {
            name: "A360",
            num: 34.73,
            id: "36034"
          },
          {
            name: "A320-200",
            num: 49.5,
            id: "32020049"
          },
        ]
      }
    },
    mounted() {
    },
  }
</script>

<style lang="scss" scoped>
  .main {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 30px 60px;

    .utilization {
      display: flex;
      flex: 1;
      justify-content: space-between;
    }

    .ranking {
      width: 446px;
      height: 410px;
      background: #ffffff;
    }

    .final {
      display: flex;
      margin: 0 30px;
      .cards + .cards {
        margin-left: 30px;
      }
      .card {
        width: 409px;
        height: 190px;

        & + .card {
          margin-top: 30px;
        }
      }
    }

    .table-echart {
      margin-top: 30px;
      width: 1800px;
      height: 580px;
      background: #ffffff;
    }

    .year-picker {
      position: absolute;
      top: 2px;
      right: 60px;
      background-color: #f4f6fc;

      ::v-deep .el-input__inner {
        /* background-color: rgba($color: #f4f6fc, $alpha: 1); */
        background-color: rgba($color: #fff, $alpha: 0.5);
        border-color: #f4f6fc;
        border-radius: 10px;
      }
    }
  }
</style>