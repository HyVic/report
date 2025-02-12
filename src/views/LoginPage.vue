<template>
  <div class="login_page">
    <div class="bg"></div>
    <div class="login_box">
      <div class="box_bg"></div>
      <div class="logo_title"><p>官网后台管理系统</p></div>
      <div class="info_box">
        <h1>欢迎登陆</h1>
        <form @submit.prevent="login">
          <div class="form_item">
            <input
              type="text"
              id="username"
              v-model="userInfo.username"
              required
              placeholder="请输入用户名"
            />
          </div>
          <div class="form_item">
            <input
              type="password"
              id="password"
              v-model="userInfo.password"
              required
              placeholder="请输入密码"
            />
          </div>
          <div class="form_item remember_box">
            <div class="remember">
              <input type="checkbox" />
              <span for="remember">记住我</span>
            </div>
            <span class="forget_password">忘记密码？</span>
          </div>
          <div class="form_item">
            <button type="submit">登陆</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const userInfo = ref({
  username: "",
  password: "",
});
const login = () => {
  console.log(userInfo.value);
  router.push({
    name: "IndexPage"
  });
};
</script>
<style scoped lang="scss">
@mixin layout($align, $justify) {
  display: flex;
  align-items: $align;
  justify-content: $justify;
}
.login_page {
  width: 100%;
  height: 100%;
  position: relative;
  isolation: isolate;
  @include layout(center, center);
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/8.jpg");
    background-size: cover;
    background-position: center;
    filter: blur(1px);
    z-index: -1;
    opacity: 0.8;
    overflow: hidden;
  }
  .login_box {
    box-shadow: 1px 1px 10px 4px #00000080;
    border-radius: 10px;
    background-color: #ffffff3b;
    position: relative;
    isolation: isolate;
    .box_bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("../assets/8.jpg");
      background-size: cover;
      background-position: center;
      z-index: -1;
      overflow: hidden;
      border-radius: 10px;
    }
    .logo_title {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      text-align: center;
      font-size: 3rem;
      color: #ffffff;
      font-weight: bold;
      text-shadow: 1px 1px 10px #000000;
      letter-spacing: 3px;
      opacity: 0.9;
      width: 62%;
    }
    .info_box {
      position: absolute;
      top: 50%;
      right: 3%;
      transform: translate(0, -50%);
      width: 30%;
      max-width: 490px;
      min-width: 300px;
      height: 125%;
      background-color: #96aaabe3;
      border-radius: 50px 0 50px 0;
      padding: 1.7rem;
      box-sizing: border-box;
      h1 {
        font-size: 1.7rem;
        margin: 10px 0 40px 0;
      }
      .form_item {
        width: 100%;
        @include layout(center, space-between);
        input {
          width: 100%;
          height: 50px;
          padding: 0 10px;
          font-size: 0.7rem;
          margin: 15px 0;
          box-sizing: border-box;
          outline: none;
          background-color: #ffffff69;
          border: 1px solid #9393935c;
          border-radius: 5px;
        }
        button {
          width: 100%;
          height: 50px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          font-size: 0.8rem;
          margin-top: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            background-color: #0069d9;
          }
        }
      }
      .remember_box {
        margin: 15px 0;
        font-size: 0.7rem;
        .remember {
          white-space: nowrap;
          display: flex;
          align-items: center;
        }
        input {
          height: 16px;
          width: 16px;
          margin-right: 8px;
        }
      }
      .forget_password{
        cursor: pointer;
      }
    }
  }
}
@media screen and (min-width: 501px) {
  .login_box {
    width: 80%;
    max-width: 1500px;
    height: 40%;
    max-height: 450px;
  }
}
@media screen and (max-width: 500px) {
  .login_box {
    width: 90%;
    height: 40%;
  }
}
</style>
