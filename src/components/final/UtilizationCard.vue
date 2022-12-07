<template>
  <div class="base-card utilization-card" :style="getStyle">
    <div class="title">
      <img class="icon" :src="iconSrc" alt="">
      <div>{{title}}</div>
      <div v-if="subTitle" class="sub-title">{{subTitle}}</div>
    </div>
    <div class="num-percent">
      <div class="num">{{num}}</div>
      <BasePercent class="percent" :isDown="false" :num="percent" borderColor="1px solid rgba(255,255,255,0.6);" backgroundColor="rgba(255,255,255,0.2)" />
    </div>
  </div>
</template>

<script>
  import BasePercent from "@/components/common/BasePercent.vue";
  export default {
    name: "UtilizationCard",
    components: {
      BasePercent
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      subTitle: {
        type: String,
        default: "",
      },
      iconSrc: {
        type: String,
        required: true,
      },
      rootData: {
        type: Object,
        default: () => {
          return {};
        }
      },
      num: {
        type: [String, Number],
        default: "0"
      },
      percent: {
        type: [String, Number],
        default: "0"
      },
      backgroundColor: {
        type: String,
        default: "linear-gradient(134deg, #5581F1 0%, #1153FC 100%)"
      }
    },
    data() {
      return {
      }
    },
    computed: {
      getStyle() {
        const { backgroundColor } = this;
        let style = backgroundColor ? `background: ${backgroundColor};` : ``;
        return style;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .utilization-card {
    width: 100%;
    height: 100%;
    padding: 20px;
    color: #ffffff;
    .title {
      display: flex;
      align-items: center;
      color: #ffffff;
      font-size: 18px;

      .icon {
        width: 22px;
        height: 22px;
        background-size: cover;
        margin-right: 10px;
      }

      .sub-title {
        margin-left: 20px;
      }
    }

    .num-percent {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: 34px;

      .num {
        font-size: 78px;
        font-weight: bold;
      }

      .percent {
        margin-bottom: 8px;
      }
    }
  }
</style>