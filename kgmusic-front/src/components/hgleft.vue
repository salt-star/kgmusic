<template>
  <div class="hgleft">
    <div class="demo-basic--circle">
      <div class="block">
        <el-avatar shape="square" :size="165" :src="squareUrl"></el-avatar>
      </div>
    </div>
    <div class="mza">{{username}}</div>
    <a href>开通酷狗豪华 VIP>></a>
  </div>
</template>
<script>
import axios from "axios";
import bus from "../utils/busEvent.js";
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "",
      sizeList: ["large", "medium", "small"],
      username: ""
    };
  },
  methods: {
    getshow() {
      axios
        .get("http://localhost:8080/xianshi", {
          params: {
            id: 1
          }
        })
        .then(response => {
          if (response.data.tximg == "") {
            this.squareUrl =
              "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png";
            this.username = response.data.username;
          } else {
            this.squareUrl = response.data.tximg;
            this.username = response.data.username;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getshow();
    bus.$on("xiugaiimg", val => {
      this.squareUrl = val;
    });
    bus.$on("tuijianimg", val => {
      this.squareUrl = val;
    });
    bus.$on("gaimz", val => {
      this.username = val;
    });
  }
};
</script>
<style>
.el-avatar > img {
  width: 100% !important;
  height: 100% !important;
  /* border:3px solid #fff */
}
.el-avatar {
  border: 6px solid #fff;
}
.mza {
  color: #007ac1;
  font-weight: bold;
  font-size: 14px;
  word-break: break-all;
}
.hgleft > a {
  display: block;
  font-family: "\5B8B\4F53";
  color: #ff9600;
  text-decoration: none;
  font: 13px/1.5 \5fae\8f6f\96c5\9ed1, simsun, sans-serif;
  margin-top: 10px;
}
</style>