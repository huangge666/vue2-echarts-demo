<template>
  <div class="main">

    <!-- 内容 -->
    <div class="left base-card">
      <div class="cards">
        <div class="accumulate-num">
          <div class="title">累计训练小时数</div>
          <div class="num">{{'14,926'}}</div>
          <div class="proportion-num">
            <span class="proportion">
              <span class="icon">
                <img v-if="'up' == 'up'"
                     src="../../assets/images/上升趋势.png"
                     alt="">
                <img v-else
                     src="../../assets/images/下降趋势.png"
                     alt="">
              </span>
              <span class="percent"
                    :class="{up: true}">
                {{'4.0 (5%)'}}
              </span>
            </span>
          </div>
          <img class="identify"
               src="../../assets/images/accumulate-feiji.png"
               alt="">
        </div>

        <div class="links">
          <div class="link delivery green">
            <div class="desc">
              <div class="title">
                外送时长
              </div>
              <div class="percent-num">
                <div class="num">{{199}}</div>
                <BasePercent :isDown="true"
                             num="4.0 (5%)"
                             borderColor="1px solid rgba(255,255,255,0.6);"
                             backgroundColor="rgba(255,255,255,0.6)"></BasePercent>
              </div>
            </div>

            <img class="icon"
                 src="../../assets/images/link-delivery-icon.png"
                 alt="">
          </div>
          <div class="link operation bule">
            <div class="desc">
              <div class="title">
                运营时长
              </div>
              <div class="percent-num">
                <div class="num">{{299}}</div>
                <BasePercent :isDown="false"
                             num="4.0 (5%)"
                             borderColor="1px solid rgba(255,255,255,0.6);"
                             backgroundColor="rgba(255,255,255,0.6)"></BasePercent>
              </div>
            </div>

            <img class="icon"
                 src="../../assets/images/link-operation-icon.png"
                 alt="">
          </div>
        </div>
      </div>
      <div class="echart">
        <HomeBarChart />
      </div>
    </div>
    <div class="right">
      <div class="base-card card accumulate">
        <HomePictorialBarChart />
      </div>
      <div class="base-card card individual">
        <HomeIndividualBarChart />
      </div>
    </div>
  </div>
</template>

<script>
import BasePercent from "@/components/common/BasePercent";
import HomeBarChart from "@/components/HomeBarChart.vue";
import HomePictorialBarChart from "@/components/HomePictorialBarChart.vue";
import HomeIndividualBarChart from "@/components/HomeIndividualBarChart.vue";
export default {
  name: "Home",
  components: {
    BasePercent,
    HomeBarChart,
    HomePictorialBarChart,
    HomeIndividualBarChart,
  },
  data() {
    return {
      yearActive: new Date().getFullYear() + "",
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px 60px;
  display: flex;

  .left {
    width: 800px;
    height: 1020px;
    background: #ffffff;
    margin-right: 30px;
    padding: 30px;

    .cards {
      color: #ffffff;
      display: flex;
      justify-content: space-between;

      .title {
        font-size: 24px;
        font-weight: 500;
      }
    }

    .echart {
      margin-top: 60px;
      height: 650px;
    }

    .accumulate-num {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 480px;
      height: 230px;
      padding: 20px 30px;
      background-size: cover;
      background-image: url("../../assets/images/accumulate-bg.png");

      .num {
        font-size: 77px;
        font-weight: bold;
      }

      .proportion-num {
        display: flex;
      }
      .proportion {
        display: flex;
        align-items: center;
        padding: 0 15px;
        height: 26px;
        font-size: 14px;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 13px 13px 13px 13px;
        border: 1px solid rgba(255, 255, 255, 0.4);

        .icon {
          width: 16px;
          height: 16px;
          margin-right: 6px;

          img {
            width: 100%;
            height: 100%;
            background-size: cover;
          }
        }

        .up,
        .up .percent {
          color: #f85252;
        }
        .down {
          color: #2ad4ae;
        }
      }

      .identify {
        position: absolute;
        top: 20px;
        right: 30px;
        width: 60px;
        height: 60px;
        background-size: cover;
      }
    }

    .links {
      .link {
        position: relative;
        width: 230px;
        height: 100px;
        border-radius: 24px 24px 24px 24px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        background-size: cover;

        .title {
          font-size: 18px;
        }

        .icon {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 48px;
          height: 48px;
        }

        .desc {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .percent-num {
          display: flex;
          align-items: flex-end;

          .num {
            margin-right: 12px;
            font-size: 32px;
            line-height: 1;
            font-weight: bold;
          }
        }
      }

      .delivery {
        background-image: url("../../assets/images/link-delivery.png");
      }

      .operation {
        background-image: url("../../assets/images/link-operation.png");
      }

      .link + .link {
        margin-top: 30px;
      }
    }
  }

  .right {
    width: 970px;

    .card {
      width: 100%;
      height: 495px;
      padding: 30px 30px 20px;

      & + .card {
        margin-top: 30px;
      }

      .title {
        color: #333333;
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
}
</style>
