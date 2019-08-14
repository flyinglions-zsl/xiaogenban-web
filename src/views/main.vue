<template>
    <div class="main">
      <div id="mainContent">
            <keep-alive>
              <router-view/>
            </keep-alive>
      </div>
    </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
    };
  },
  mounted () {
   
  },
  watch: {
    
  },
  methods: {
    
  }
};
</script>

<style lang="less" scoped>
.main{
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 1310px;
  min-height: 620px;
  // padding: 5px;
  // background: url("../assets/home_bg.jpg")no-repeat center center;
  background-size: 100% 100%;
  .header{
    height: 22vh;
  }
  .govbankheader, .aumheader, .balanceHeader{
    height: 7.5vh;
    width: 100%;
    min-height: 50px;
  }
  #mainContent{
    width: 100%;
    /*height: 100%;*/
    /*height: calc(100% - 7.5vh);*/
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
  }
}
@media screen and (max-width: 1440px) {
  .main{
    width: 100%;
    height: 100%;
    min-width: 1366px;
    min-height: 620px;
  }
}
@media screen and (max-width: 1366px) {
  .main{
    width: 100%;
    height: 100%;
    min-width: 1046px;
    min-height: 475px;
  }
}
</style>
