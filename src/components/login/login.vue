<template>
  <div class="login-container">
    <div class="close-login-box"></div>
    <div class="login-box">
      <header>
        <img src="../../assets/img/face.png" alt="login">
        <p>代码很美，而你正好有空</p>
      </header>
      <main>
        <div class="login-type">
          <span>登录</span>
          <span>注册</span>
        </div>
        <div class="login-input">
          <input type="text" placeholder="输入邮箱或手机号">
        </div>
        <div class="login-input">
          <input type="password" placeholder="密码">
        </div>
        <div class="forget-psw">
          <a href="javascript:;">忘记密码</a>
        </div>
        <div class="login-btn">
          登录
        </div>
      </main>
      <footer>
        <div>社区账号登录：</div>
      </footer>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                name: 'ff'
            };
        }
    };

</script>
<style scoped>
  .login-container {
    height: 500px;
    background-color: #ed3f14;
  }
</style>
