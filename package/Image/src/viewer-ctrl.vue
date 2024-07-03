<template>
  <el-card class="img-brightness-contrast-saturate" :body-style='{padding: "10px",display: "flex","align-items": "center"}'>
    <div class="ctrl-item" title="亮度">
      <el-slider v-model="infoData.brightness" vertical height="200px"></el-slider>
      <i class="el-icon-sunny ctrl-icon"></i>
    </div>
    <div class="ctrl-item" title="对比度">
      <el-slider v-model="infoData.contrast" vertical height="200px"></el-slider>
      <span class="icon-contrast ctrl-icon"></span>
    </div>
    <div class="ctrl-item" title="饱和度">
      <el-slider v-model="infoData.saturate" vertical height="200px"></el-slider>
      <span class="icon-saturate ctrl-icon"></span>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "viewer-ctrl",
  props: {},
  data: function () {
    return {
      infoData: {
        brightness: 50,
        contrast: 50,
        saturate: 50
      },
      // 允许调节图片的亮度,对比度,饱和度的程度,默认为0-200%
      canAdjustRate: 2
    };
  },
  computed: {
    filterStyle: function () {
      return {
        '-webkit-filter':
            'brightness(' +
            this.infoData.brightness * this.canAdjustRate +
            '%) contrast(' +
            this.infoData.contrast * this.canAdjustRate +
            '%) saturate(' +
            this.infoData.saturate * this.canAdjustRate +
            '%)',
        '-moz-filter':
            'brightness(' +
            this.infoData.brightness * this.canAdjustRate +
            '%) contrast(' +
            this.infoData.contrast * this.canAdjustRate +
            '%) saturate(' +
            this.infoData.saturate * this.canAdjustRate +
            '%)',
        '-ms-filter':
            'brightness(' +
            this.infoData.brightness * this.canAdjustRate +
            '%) contrast(' +
            this.infoData.contrast * this.canAdjustRate +
            '%) saturate(' +
            this.infoData.saturate * this.canAdjustRate +
            '%)',
        filter:
            'brightness(' +
            this.infoData.brightness * this.canAdjustRate +
            '%) contrast(' +
            this.infoData.contrast * this.canAdjustRate +
            '%) saturate(' +
            this.infoData.saturate * this.canAdjustRate +
            '%)'
      };
    }
  },
  methods: {
    reset: function () {
      this.infoData.brightness = 50;
      this.infoData.contrast = 50;
      this.infoData.saturate = 50;
    }
  },
  watch: {
    filterStyle: function (val) {
      this.$emit('filter-style-change', val);
    }
  }
}
</script>

<style lang="scss" scoped>
.img-brightness-contrast-saturate {
  overflow: unset;
  .ctrl-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
    .ctrl-icon {
      margin-top: 10px;
      width: 24px;
      height: 24px;
    }
    .el-icon-sunny {
      font-size: 24px;
      font-weight: bold;
      position: relative;
      color: #333;
    }
    .icon-contrast {
      position: relative;
      &:before,&:after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(-45deg);
        content: '';
        border-radius: 50%;
        box-sizing: border-box;
      }
      &:before {
        border: 2px solid #333;
        width: 16px;
        height: 16px;
      }
      &:after {
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-top-color: #333;
        border-left-color: #333;
      }
    }
    .icon-saturate {
      position: relative;
      &:before,&:after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
        content: '';
        border-radius: 50%;
        box-sizing: border-box;
      }
      &:before {
        border: 2px solid #333;
        width: 16px;
        height: 16px;
      }
      &:after {
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-top-color: #333;
        border-right-color: #333;
      }
    }
  }
}
</style>