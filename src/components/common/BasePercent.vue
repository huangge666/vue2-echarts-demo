<template>
  <div class="percent" :class="{down: isDown}" :style="getStyle">
    <div class="icon">
      <img v-if="!isDown" src="../../assets/images/上升趋势.png" alt="">
      <img v-else src="../../assets/images/下降趋势.png" alt="">
    </div>
    <div class="num">
      {{num}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BasePercent',
    props: {
      // 是否下降趋势
      isDown: {
        type: Boolean,
        default: false,
      },
      num: {
        type: [String, Number],
        default: "0"
      },
      borderColor: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      }
    },
    data() {
      return {

      };
    },
    computed: {
      getStyle() {
        const { borderColor, backgroundColor } = this;
        let style = borderColor ? `border: ${borderColor};` : ``;
        style = backgroundColor ? `${style}background-color: ${backgroundColor};` : ``;
        return style;
      }
    },
  };
</script>

<style lang="scss" scoped>
  .percent {
    display: flex;
    align-items: center;
    height: 26px;
    padding: 0 15px;
    border-radius: 13px 13px 13px 13px;
    opacity: 1;
    border: 1px solid #ff5b27;
    background-color: rgba(255, 91, 39, 0.2);

    &.down {
      background-color: rgba(42, 212, 174, 0.2);
      border: 1px solid #2ad4ae;
      .num {
        color: #2ad4ae !important;
      }
    }

    .icon {
      margin-right: 6px;
    }

    .num {
      font-size: 14px;
      font-weight: 400;
      color: #f85252;
    }
  }
</style>