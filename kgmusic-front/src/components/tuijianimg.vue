<template>
  <div class="tuijian">
    <div class="tuijianimg">推荐头像：</div>
    <ul class="imgul">
      <li v-for="(mitem,i) in tjimg" :key="i">
        <img :src="mitem" alt class="tjdimg" />
        <button type="button" class="tjbutton" @click="xuanze(i)" ref="asd">选择</button>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import bus from "../utils/busEvent.js";
export default {
  data() {
    return {
      activeName: "first",
      tjimg: [
        "https://imgessl.kugou.com/kugouicon/20100101/20100101192931478054.jpg",
        "https://imgessl.kugou.com/kugouicon/20100101/20100101192932231831.jpg",
        "https://imgessl.kugou.com/kugouicon/20100101/20100101192933418660.jpg",
        "https://imgessl.kugou.com/kugouicon/20100101/20100101192935882161.jpg"
      ]
    };
  },
  methods: {
    xuanze(i) {
      console.log(this.$refs);
      bus.$emit("tuijianimg", this.tjimg[i]);

      axios
        .get("http://localhost:8080/uptuijianimg", {
          params: {
            tximg: this.tjimg[i]
          }
        })
        .then(response => {
          alert("修改成功");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style>
.tuijian {
  width: 92%;
  height:195px;
  padding: 50px 40px 0 40px;
  position: relative;
  float: left;
}
.tuijianimg {
  position: absolute;
  top: 0;
  left: -15px;
  width: 85px;
  height: 29px;
  padding-left: 55px;
  line-height: 25px;
  font-size: 14px;
  color: #ffffff;
  display: block;
  background-image: url(https://www.kugou.com/newuc/static/images/kg_uc_splice.png);
  background-repeat: no-repeat;
  background-position: 0 -200px;
}
</style>