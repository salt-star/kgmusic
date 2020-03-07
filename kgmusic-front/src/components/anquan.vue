<template>
  <div>
    <div class="sebox" v-for="(item,index) in zt" :key="index">
      <div :class="st[index]"></div>
      <div class="anquanwenzi">
        <span>{{item.bt}}</span>
        <span class="kuohao">(可用于找回密码和登录帐号)</span>
      </div>
      <div class="zt">状态:{{item.ztz}}</div>
      <div class="bdbox">
        <button class="bangding" @click="dianjiyixa(index)">{{item.ad}}</button>
      </div>
    </div>
  </div>
</template>
   
<script>
export default {
  data() {
    return {
      zt: [
        {
          ad: "立即绑定",
          bt: "安全手机",
          ztz: "未绑定"
        },
        {
          ad: "立即绑定",
          bt: "qq",
          ztz: "未绑定"
        },
        {
          ad: "立即绑定",
          bt: "微信",
          ztz: "未绑定"
        }
      ],
      st: ["imgone", "imgtwo", "imgsd"]
    };
  },
  methods: {
    dianjiyixa(i) {
      if (this.zt[i].ztz == "已绑定") {
        this.zt[i].ztz = "未绑定";
        this.zt[i].ad = "立即绑定";
      } else {
        this.zt[i].ztz = "已绑定";
        this.zt[i].ad = "立即解绑";
      }
    }
  }
};
</script>

<style>
.sebox {
  display: flex;
  height: 71px;
  line-height: 71px;
  border-bottom: 1px solid #e7e7e7;
}
.imgtwo {
  float: left;
  display: block;
  width: 30px;
  height: 30px;
  margin: 20px 10px 20px 0;
  background: url(https://www.kugou.com/newuc/static/images/account_icon.png)
    no-repeat;
}
.imgone {
  float: left;
  display: block;
  width: 30px;
  height: 30px;
  margin: 20px 10px 20px 0;
  background: url(https://www.kugou.com/newuc/static/images/account_icon.png)
    no-repeat;
  background-position: -60px 0;
}
.anquanwenzi {
  margin-left: 40px;
  margin-right: 40px;
  width: 495px;
  font-size: 18px;
}
.kuohao {
  font-size: 14px;
  color: #999;
}
.bdbox {
  float: right;
}
.zt {
  margin: 0 20px 0 0;
  color: #999;
}
.bangding {
  width: 90px;
  height: 30px;
  background-color: #169af3;
  color: #fff;
}
.imgsd {
  float: left;
  display: block;
  width: 30px;
  height: 30px;
  margin: 20px 10px 20px 0;
  background: url(https://www.kugou.com/newuc/static/images/account_icon.png)
    no-repeat;
  background-position: -90px -60px;
}
</style>