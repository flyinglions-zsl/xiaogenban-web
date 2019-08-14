<template>
  <div class="el-progress-bar">
    <label>{{text}}</label>
    <div class="el-progress-bar__outer" :style="{height: strokeWidth + unit}">
      <el-tooltip :disabled="!showTip"  placement="top" effect="light" :visible-arrow="false" >
        <div slot="content">
          <p>{{text}}</p>
          <div style="padding-top: 5px">{{value}}</div>
        </div>
        <div class="el-progress-bar__inner" :style="barStyle">
          <div class="el-progress-bar__innerText_2">{{value}}</div>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProgress',
  props: {
    width: {
      type: Number,
      default: 0,
      required: true,
      validator: val => val >= 0 && val <= 100
    },
    strokeWidth: {
      type: Number,
      default: 20
    },
    unit: {
      type: String,
      default: 'px'
    },
    text: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'RGBA(16, 21, 29, 1.00)'
    },
    value: {
      type: Number,
      default: 0
    },
    showTip: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value2: ''
    };
  },
  computed: {
    barStyle () {
      const style = {};
      style.width = this.width + '%';
      style.backgroundColor = this.color;
      return style;
    }
  }
};
</script>

<style lang="less" scoped>
  .el-progress-bar{
    padding-top: 0.5vh;
    padding-right: 10px;
    margin-right: 10px;
    display: flex;
    /*margin-top: .6vw;*/
    .el-progress-bar__outer{
      border-radius: 0;
      flex: 1;
      padding-left: 10px;
      margin-left: 10px;
      background-color:transparent;
      .el-progress-bar__inner{
        border-radius: 0;
      }
      .el-progress-bar__innerText_2{
        font-weight: bold;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

</style>
