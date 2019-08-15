<template>
  <div class="box">
    <!-- <div class="logo">
      <img src="../../assets/logo.png" alt="">
   <div>
     一只基于Vue2.x的pc和移动端。
   </div>
    </div> -->
    <layout></layout>
  </div>
</template>

<script>
import layout from '@/views/layout/layout'
export default {
  data() {
    return {

    };
  },
  components: {
    layout
  },
  watch: {
    
  },
  mounted(){

  },
  methods:{

  }
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  // flex-direction: column;
  // justify-content: center;
  // text-align: center;
  // align-items: center;
  //   -webkit-box-pack: center;
  // -webkit-box-orient: vertical;
  // -webkit-box-direction: normal;
  .logo {
    width: 298px;
    height: 258px;
    position: relative;
    z-index: 0;
}
  img{
    width: 100%;
    height: 100%;
  }
}
</style>