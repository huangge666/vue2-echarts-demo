<template>
  <div class="base-ranking">
    <div class="title">{{title}}</div>
    <div class="items">
      <div class="item" v-for="item in rootData" :key="item.id">
        <div class="desc">
          <div class="name">{{item.name}}</div>
          <div class="num">{{item.num}}</div>
        </div>
        <el-progress class="progress" :text-inside="true" :show-text="false" :stroke-width="24" :percentage="item.num" :color="color" :define-back-color="defineBackColor"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BaseRanking",
    props: {
      title: {
        type: String,
        required: true,
      },
      rootData: {
        type: Array,
        default: () => {
          return [];
        }
      },
      color: {
        type: String,
        default: "#2784FF"
      },
      defineBackColor: {
        type: String,
        default: "#F4F6FC"
      }
    },
    data() {
      return {
      }
    },
    mounted() {
    },
  }
</script>

<style lang="scss" scoped>
  .base-ranking {
    padding: 30px;
    color: #333333;

    .title {
      font-size: 24px;
      font-weight: 500;
    }

    .items {
      margin-top: 30px;
    }

    .item {
      & + .item {
        margin-top: 26px;
      }

      .desc {
        display: flex;
        justify-content: space-between;
      }

      .name {
        font-size: 16px;
        font-weight: bold;
      }

      .num {
        font-size: 16px;
        font-weight: 400;
      }

      .progress {
        margin-top: 8px;
      }
    }
  }
</style>