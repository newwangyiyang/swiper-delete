<template>
  <div class="wrap_index">
      <ul class="input_box">
          <li>
              <i class="iconfont icon-shouji"></i>
              <input type="tel" placeholder="请输入手机号码">
          </li>
          <li>
              <i class="iconfont icon-mima"></i>
              <input type="tel" placeholder="请输入验证码">
              <button @click="getCode" :style="codeObj.codeBg" :disabled="codeObj.codeState">{{codeObj.codeMsg}}</button>
          </li>
      </ul>
      <mt-popup v-model="popupObj.popupVisible" position="top" :modal="false">
        <div class="pop_msg" :style="popupObj.popupBg">
            <span>{{popupObj.popupText}}</span>
        </div>
    </mt-popup>
    <button class="login_btn">登录</button>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup } from "mint-ui";
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

Vue.component(Popup.name, Popup);
export default {
  name: "Index",
  data() {
    return {
      phone: "",
      codeObj: {
        codeMsg: "获取验证码",
        codeState: false,
        codeBg: {
          "background-color": "#3498db"
        }
      },
      popupObj: {
        popupVisible: false,
        popupText: "",
        popupBg: {
          "background-color": ""
        }
      }
    };
  },
  created() {},
  methods: {
    getCode() {
      let codeNum = 60;
      let timer = setInterval(() => {
        if (codeNum <= 0) {
          codeNum = 60;
          this.codeObj = {
            codeMsg: "重新获取",
            codeState: false,
            codeBg: {
              "background-color": "#3498db"
            }
          };
          clearInterval(timer);
          return false;
        }
        this.popupObj = {
          popupVisible: true,
          popupText: "短信已发送",
          popupBg: {
            "background-color": "#2ecc71"
          }
        };

        let timer1 = setTimeout(() => {
          this.popupObj.popupVisible = false;
          clearTimeout(timer1);
        }, 3000);
        this.codeObj = {
          codeMsg: --codeNum + "s",
          codeState: true,
          codeBg: {
            "background-color": "#95a5a6"
          }
        };
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
@mainColor: #3498db;
.wrap_index {
  height: 100vh;
  width: 100vw;
  background: url("http://imgm.cnmo-img.com.cn/appimg/screenpic/middle/791/790843.jpg")
    no-repeat center / cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .input_box {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    justify-content: center;
    > li {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      position: relative;
      > i {
        font-size: 60px !important;
        color: #fff;
        margin-right: 20px;
      }
      > input {
        height: 60px;
        background-color: rgba(255, 255, 255, 0.8);
        width: 400px;
        padding-left: 20px;
        border-radius: 10px;
      }
      > button {
        position: absolute;
        height: 60px;
        right: 0;
        color: #fff;
        border-radius: 10px;
        line-height: 60px;
        text-align: center;
        width: 170px;
        font-size: 26px;
      }
    }
  }
  .login_btn {
      width: 600px;
      height: 80px;
      color: #fff;
      font-size: 28px;
      border-radius: 10px;
      margin-top: 20px; 
      background-color: @mainColor;
  }
}
.pop_msg {
  width: 100vw;
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  > span {
    color: #fff;
    font-size: 26px;
  }
}
</style>
