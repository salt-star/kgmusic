<template>
  <div class="dataozi">
    <el-container>
      <el-container>
        <el-aside width="200px" class="lf">
          <hgleft></hgleft>
        </el-aside>
        <el-main>
          <div class="mtop">
            <h4 class="zikg">我的酷狗</h4>
            <div class="hzpi">
              <span class="zipi">Personal information</span>
            </div>
          </div>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick" stretch>
            <el-tab-pane label="修改头像" name="first" class="btkg">
              <xiugaiimg></xiugaiimg>
              <tuijianimg></tuijianimg>
            </el-tab-pane>
            <el-tab-pane label="编辑资料" name="second" class="btkg">
              <bianji></bianji>
            </el-tab-pane>
            <el-tab-pane label="修改密码" name="third" class="btkg">
              <xiugaimima></xiugaimima>
            </el-tab-pane>
            <el-tab-pane label="账户安全" name="fourth" class="btkg">
              <anquan></anquan>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import xiugaiimg from "../components/xiugaiimg.vue";
import bianji from "../components/bianjiziliao.vue";
import xiugaimima from "../components/xiugaimima.vue";
import anquan from "../components/anquan.vue";
import hgleft from "../components/hgleft.vue";
import tuijianimg from "../components/tuijianimg.vue";
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    
  },
  components: {
    xiugaiimg: xiugaiimg,
    bianji: bianji,
    xiugaimima: xiugaimima,
    anquan: anquan,
    hgleft: hgleft,
    tuijianimg: tuijianimg
  }
};
</script>

<style>
.dataozi {
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 80%;
  border: 1px solid #ccc;
}
.hgleft {
  padding-top: 40px;
  height: 587px;
  background: #e2f4ff;
  text-align: center;
}
.block {
  margin-bottom: 10px;
}
.mtop {
  display: flex;
  margin-bottom: 20px;
}
.zikg {
  float: left;
  height: 24px;
  color: #7b7b7b;
  font: 20px/24px Microsoft Yahei, "\5b8b\4f53", sans-serif;
  margin-right: 10px;
}
.zipi {
  font-family: arial, "\5b8b\4f53", sans-serif;
  color: #a1a1a1;
  float: left;
  line-height: 1.2;
  padding-top: 8px;
}
.hzpi {
  font: 13px/1.5 \5fae\8f6f\96c5\9ed1, simsun, sans-serif;
  float: left;
  line-height: 24px;
}
.el-tabs__item {
  width: 183px !important;
  height: 32px !important;
  line-height: 32px !important;
}
.gaitp {
  position: relative;
  padding: 30px 40px 0 40px;
}
.txbt {
  height: 27px;
  line-height: 27px;
  color: #7b7b7b;
  font-size: 14px;
  margin-bottom: 10px;
}
.el-main {
  padding: 10px !important;
}
.imgul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin-top: 30px;
  padding-bottom: 20px;
}
.imgul > li {
  height: 110px;
}
.tjdimg {
  width: 110px;
  height: 110px;
}
.tjbutton {
  height: 27px;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#68c4ff), to(#4ca4dd));
  padding: 0 28px;
  font-weight: 700;
  color: #fff;
  display: block;
  height: 27px;
  line-height: 27px;
  margin: auto;
}
</style>