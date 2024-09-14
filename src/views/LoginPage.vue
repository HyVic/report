<template>
  <div class="dialog">
    <div class="dialog-inner">
      <div class="bg"></div>
      <div class="dialog-top">
        <span>{{text}}</span>
        <i class="iconfont icon-close" @click="Close"></i>
      </div>
      <div class="dialog-content" v-if="text === 'Login'">
        <form>
          <div class="form-group">
<!--            <label for="username">Username</label>-->
            <input type="text" id="username" v-model="loginInfo.username" placeholder="username">
          </div>
          <div class="form-group">
<!--            <label for="password">Password</label>-->
            <input type="password" id="password" v-model="loginInfo.password" placeholder="password">
          </div>
          <div class="submit" @click="Login">Login</div>
        </form>
        <div class="bottom">
          <span @click="text = 'Register'">Without accounts?</span>
          <span @click="text = 'Forgot your password'">Forget password?</span>
        </div>
      </div>
      <div class="dialog-content" v-if="text === 'Register'">
        <form>
          <div class="form-group">
            <input type="text" id="username" v-model="loginInfo.username" placeholder="username">
          </div>
          <div class="form-group">
            <input type="email" id="password" v-model="loginInfo.email" placeholder="your email">
          </div>
          <div class="form-group">
            <input type="phone" id="password" v-model="loginInfo.phone" placeholder="your phone">
          </div>
          <div class="form-group">
            <input type="password" id="password" v-model="loginInfo.password" placeholder="password">
          </div>
          <div class="form-group">
            <input type="password" id="password" v-model="loginInfo.passwordAgain" placeholder="password again">
          </div>
          <div class="submit" @click="Register">Register</div>
        </form>
        <div class="bottom">
          <span @click="text = 'Login'">Have an account?</span>
        </div>
      </div>
      <div class="dialog-content" v-if="text === 'Forgot your password'">
        <form>
          <div class="form-group">
            <input type="text" id="username" v-model="loginInfo.username" placeholder="username">
          </div>
          <div class="form-group">
            <input type="password" id="email" v-model="loginInfo.email" placeholder="your email">
          </div>
          <div class="form-group">
            <input type="password" id="text" v-model="loginInfo.phone" placeholder="your phone">
          </div>
          <div class="form-group">
            <input type="password" id="password" v-model="loginInfo.password" placeholder="password">
          </div>
          <div class="form-group">
            <input type="password" id="password" v-model="loginInfo.passwordAgain" placeholder="password again">
          </div>
          <div class="submit" @click="Submit">Submit</div>
        </form>
        <div class="bottom">
          <span @click="text = 'Login'">Have an account?</span>
          <span @click="text = 'Register'">Without accounts?</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const loginInfo = ref({
  username: '',
  email: '',
  phone: '',
  password: '',
  passwordAgain: '',
})
const text = ref('Login')
const emits = defineEmits(['close'])
const Close = () => {
  emits('close')
}
const Login = () => {
  emits('close')
}
const Register = () => {
  emits('close')
}
const Submit = () => {
  emits('close')
}
</script>
<style scoped lang="scss">
$color-red: #6d1d29;
$color-blue: #254682;
$color-baby-blue: #365baa;
@mixin layout($align,$justify){
  display: flex;
  align-items: $align;
  justify-content: $justify;
}
@mixin size($width,$height){
  width: $width;
  height: $height;
}
@mixin layout($align,$justify){
  display: flex;
  align-items: $align;
  justify-content: $justify;
}
@mixin com(){
  padding: 0 30px;
  box-sizing: border-box;
}
.dialog{
  @include size(100%,100%);
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000063;
  z-index: 3;
  @include layout(center,center);
  .dialog-inner{
    @include size(450px,auto);
    background-color: white;
    border-radius: 10px;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    .bg{
      position: absolute;
      @include size(100%,220px);
      left: 0;
      top: 0;
      background: url('../assets/login.png') no-repeat center center;
      background-size: 100% 220px;
      opacity: .7;
      overflow: hidden;
      z-index: -1;
    }
    .dialog-top{
      height: 50px;
      border-bottom: 1px solid #e6e6e6;
      position: relative;
      @include com();
      @include layout(center,space-between);
      .iconfont{
        cursor: pointer;
        width: 35px;
        aspect-ratio: 1;
        border-radius: 5px;
        font-size: 14px;
        justify-content: center;
        position: absolute;
        right: 15px;
        top: 8px;
        @include layout(center, center);
        &:hover{
          color: white;
          background-color: #00000014;
        }
      }
    }
    .dialog-content{
      width: 100%;
      margin-top: 220px;
      @include com();
      form {
        .form-group {
          margin-bottom: 20px;
          @include size(100%, 45px);
          border-radius: 30px;
          border: 1px solid #a9a9a969;
          overflow: hidden;
          input {
            border: none;
            outline: none;
            padding: 10px 20px;
            border-radius: 30px;
            font-size: 17px;
            box-sizing: border-box;
            @include size(95%, 100%);
          }
        }
        .submit {
          margin-bottom: 20px;
          border-radius: 30px;
          border: 1px solid #a9a9a9;
          text-align: center;
          color: white;
          background-color: $color-baby-blue;
          cursor: pointer;
          font-size: 20px;
          margin-top: 40px;
          @include size(100%, 50px);
          @include layout(center, center);
          &:hover {
            background-color: $color-blue;
          }
        }
      }
      .bottom{
        margin: 40px 0;
        font-size: 17px;
        color: $color-baby-blue;
        padding: 10px;
        @include layout(center, space-between);
        span{
          cursor: pointer;
          &:hover{
            color: $color-blue;
          }
        }
      }
    }
  }
}
</style>