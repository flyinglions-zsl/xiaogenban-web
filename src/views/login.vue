<template>
<div class="login">
     <div class="header">
        <div class="header_left" style="margin-left: 20px;">
             <img src="modulars/cczjxzfx/assets/images/joints.png"/>
            <div class="heard_rig">
                <div style="vertical-align: middle;display: table-cell;margin-left: 2%;">|<span style="margin-left: 2%;"></span></div>

            </div>
        </div>
    </div>
    <div class="logins">
        <div class="loginHead">
            <span class="title">用户登录</span>
        </div>
        <div class="loginForm" style="margin-top: 2em;">
            <img src="../assets/user.png" class="imgA">
            <img src="../assets/psd.png" class="imgB">
            <input type="text" required placeholder="请输入用户名" class="inputL" ref="username"/>
            <input type="password" required placeholder="请输入密码" class="inputL" ref="password"/>
            <p><input type="checkbox" class='chec' /><span style="padding-left: 5px;">记住用户名</span></p>
            <p></p>
            <button type="button" v-on:click="login" class="btn inputL" style="padding:0;">登&nbsp;&nbsp;录</button>
        </div>
    </div>
    <div class="loginstwo">
    </div>
</div>
</template>

<script>
export default {
  data(){
      return {
          username: '',
          password: ''
      }
  },
  mounted () {
      //this.$router.push({path: '/main/marketingAnalysis'});
  },
  methods: {
    login () {
      let url = '/login.do';
      let params = {
        username: this.$refs.username.value,
        password: this.$refs.password.value
      };
      this.$axios(url, params).then(res => {
        console.log(res)
        if(res.code="200"){
            this.$message({
              message: res.msg,
              type: 'success'
            });
           this.$router.push({path: '/main/system'});
        }else{
           this.$message({
            message: res.msg,
              type: 'error'
           });
        }
      });
    }
  }

};
</script>

<style>
    .login {
        width: 100%;
        height: 100%;
        background: url(../assets/login_bg.jpg) no-repeat;
        background-size: 100% 100%;
        overflow: hidden;
    }

    .login .header {
        width: 100%;
        height: 10%;
        background: #476c81;
        opacity: 0.8;
        display: table;
        filter: alpha(opacity=90);
    }

    @media screen and (max-width: 1920px) {
        .headTitle {
            font-size: 2.6rem;
        }
    }

    .header .header_left {
        width: 100%;
        height: 100%;
        vertical-align: middle;
        display: table-cell;
    }

    .header {
        width: 100%;
        margin: auto;
    }

    .login .header img {
        width: 19%;
        float: left;
    }

    .login .heard_rig {
        width: 40%;
        height: 100%;
        color: #FFFFFF;
        float: left;
        display: table;
        font-size: 3em;
        margin-left: 2%;
    }

    .login .header span {
        border-left: 2px solid #000;
        padding-left: 2.083333rem;
        margin-left: 1.666667rem;
        font-size: 1.666667rem;
    }

    .login .loginHead {
        width: 100%;
        line-height: 4em;
        display: flex;
        justify-content: space-between;
        background: #7dc9e4;
    }

    .login .loginType,
    .loginForm {
        width: 70%;
        margin-top: 2em;
        margin: auto;
        font-size: 1.166667rem;
        position: relative;
    }

    .login .loginType,
    .loginForm p {
        color: #555;
    }

    .loginForm img {
        position: absolute;
        width: 1.3rem;
    }

    .loginForm .imgA {
        top: 1.9rem;
        left: 1rem;
    }

    .loginForm .imgB {
        top: 6.4rem;
        left: 1rem;
    }

    .loginForm p {
        margin-top: 0.833333rem;
    }

    .loginTip {}

    .login .loginType div {
        width: 50%;
    }

    .login .loginType .zhmm {
        text-align: center;
        float: left;
    }

    .login .loginType span {
        cursor: pointer;
    }

    .login .loginType .sjyz {
        text-align: center;
        float: right;
    }

    .loginHead .title {
        font-size: 2.0rem;
        text-align: center;
        width: 100%;
        display: inline-block;
    }

    .chooseLogin {
        color: #F72B46;
        border-bottom: 1px solid #F72B46;
    }

    .noChoose {
        border-bottom: 1px solid #c1c1c1;
    }

    .login .btn {
        width: 100%;
        height: 3.333333rem;
        background: #0280BD;
        border: none;
        border-radius: 2.916667rem!important;
        outline: none;
    }

    .yzmInput {
        width: 50% !important;
        float: left;
        margin-bottom: 0.833333rem;
    }

    .getYzm {
        width: 40% !important;
        float: right;
        margin-bottom: 10px;
    }

    .login .btn a {
        padding: 0.75rem 6.25rem;
        text-decoration: none;
        color: #fff;
    }

    .login .form-horizontal {
        width: 70%;
        position: absolute;
        left: 15%;
    }

    .login .inputL {
        margin-top: 1.25rem;
        /* cursor: pointer; */
        /*去掉chrome浏览器输入框内的蓝色边框*/
        outline: none;
        width: 100%;
        height: 3.166667rem;
        border: 1px solid #c1c1c1;
        border-radius: 7px;
        padding: 0 0.833333rem 0 3rem;
    }

    button.inputL {
        color: #FFFFFF;
    }

    .login .loginstwo {
        height: 10%;
        color: #ffffff;
        width: 30%;
        border-radius: 0.833333rem;
        margin: 10% 30% 0 auto;
        font-size: 1.2em;
    }

    .login .bottom_a {
        margin-left: 10%;
    }

    .login .bottom_b {
        margin-left: 5%;
    }

    .login .logins {
        background: #fff;
        height: 25.833333rem;
        width: 33.333333rem;
        border-radius: 0.833333rem;
        margin: 13% auto 0 auto;
        opacity: 0.7;
        filter: alpha(opacity=90);
    }

    a:hover,
    a:visited,
    a:link,
    a:active {
        text-decoration: none;
        color: #A2CEFF;
    }
</style>
