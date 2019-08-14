<template>
<div class="test">
  <div>
    <p> 浏览器信息： {{browser.appVersion}}</p><br/>
    <p> 当前浏览器： <span>{{ browser.ie ? '是' : '不是'}}</span>IE浏览器 <span v-if="browser.ie">版本为：{{browser.version}}</span></p><br/>
    <p> 浏览器 --宽度：{{outerWidth}}--高度:{{outerHeight}}</p><br/>
    <p> 浏览器内页面可用 --宽度：{{innerWidth}}--高度:{{innerHeight}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      browser: '',
      outerWidth: 0,
      outerHeight: 0,
      innerHeight: 0,
      innerWidth: 0
    };
  },
  mounted () {
    this.browser = this.detect(navigator);
    let vm = this;
    function resizeValue () {
      // window.outerWidth ：浏览器宽度。
      // window.outerHeight ：浏览器高度。
      // window.innerWidth ：浏览器内页面可用宽度；此宽度包含了垂直滚动条的宽度(若存在)。可表示为浏览器当前宽度去除浏览器边框后的宽度。
      // window.innerHeight ：浏览器内页面可用高度；此高度包含了水平滚动条的高度(若存在)。可表示为浏览器当前高度去除浏览器边框、工具条后的高度。
      vm.outerWidth = window.outerWidth;
      vm.outerHeight = window.outerHeight;
      vm.innerWidth = window.innerWidth;
      vm.innerHeight = window.innerHeight;
    }
    resizeValue();
    window.addEventListener('resize', resizeValue);
    this.$once('hook:deactivated', () => {
      window.removeEventListener('resize', resizeValue);
    });
  },
  methods: {
    detect (navi) {
      let ua = navi.userAgent
      var os = {};
      var browser = {};
      // var webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/);
      // var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
      // var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      // var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      // var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
      // var webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/);
      // var touchpad = webos && ua.match(/TouchPad/);
      // var kindle = ua.match(/Kindle\/([\d.]+)/);
      // var silk = ua.match(/Silk\/([\d._]+)/);
      // var blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/);
      // var bb10 = ua.match(/(BB10).*Version\/([\d.]+)/);
      // var rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/);
      // var playbook = ua.match(/PlayBook/);
      // var chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/);
      var firefox = ua.match(/Firefox\/([\d.]+)/);
      // var safari = webkit && ua.match(/Mobile\//) && !chrome;
      // var webview = ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !chrome;
      var ie = ua.match(/MSIE\s([\d.]+)/) ||
    // IE 11 Trident/7.0; rv:11.0
    ua.match(/Trident\/.+?rv:(([\d.]+))/);
      var edge = ua.match(/Edge\/([\d.]+)/); // IE 12 and 12+

      var weChat = (/micromessenger/i).test(ua);

      // Todo: clean this up with a better OS/browser seperation:
      // - discern (more) between multiple browsers on android
      // - decide if kindle fire in silk mode is android or not
      // - Firefox on Android doesn't specify the Android version
      // - possibly devide in os, device and browser hashes

      // if (browser.webkit = !!webkit) browser.version = webkit[1];

      // if (android) os.android = true, os.version = android[2];
      // if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.');
      // if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.');
      // if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
      // if (webos) os.webos = true, os.version = webos[2];
      // if (touchpad) os.touchpad = true;
      // if (blackberry) os.blackberry = true, os.version = blackberry[2];
      // if (bb10) os.bb10 = true, os.version = bb10[2];
      // if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2];
      // if (playbook) browser.playbook = true;
      // if (kindle) os.kindle = true, os.version = kindle[1];
      // if (silk) browser.silk = true, browser.version = silk[1];
      // if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true;
      // if (chrome) browser.chrome = true, browser.version = chrome[1];
      if (firefox) {
        browser.firefox = true;
        browser.version = firefox[1];
      }
      // if (safari && (ua.match(/Safari/) || !!os.ios)) browser.safari = true;
      // if (webview) browser.webview = true;

      if (ie) {
        browser.ie = true;
        browser.version = ie[1];
      }

      if (edge) {
        browser.edge = true;
        browser.version = edge[1];
      }

      // It is difficult to detect WeChat in Win Phone precisely, because ua can
      // not be set on win phone. So we do not consider Win Phone.
      if (weChat) {
        browser.weChat = true;
      }
      browser.appVersion = navi.appName;
      // os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) ||
      //     (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/)));
      // os.phone  = !!(!os.tablet && !os.ipod && (android || iphone || webos ||
      //     (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
      //     (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/))));
      return browser;
    }
  }
};
</script>

<style lang="less" scoped>
  .test{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    div{
      width: 400px;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    span {
      color: red;
    }
  }
</style>
