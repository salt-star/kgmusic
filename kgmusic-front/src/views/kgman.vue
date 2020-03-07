<template>
  <el-carousel height="88vh" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="item in img" :key="item">
      <img :src="item" alt class="img" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data: function() {
    return {
      img: [
        "https://www.kugou.com/star_project/dist/static/images/11.jpg?v=20",
        "https://www.kugou.com/star_project/dist/static/images/21.jpg?v=20",
        "https://www.kugou.com/star_project/dist/static/images/3.jpg?v=20",
        "https://www.kugou.com/star_project/dist/static/images/4.jpg?v=20",
        "https://www.kugou.com/star_project/dist/static/images/51.jpg?v=20"
      ]
    };
  }
};
</script>

<style>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.img {
  width: 100%;
  height: 100%;
}
.el-carousel__indicator--vertical .el-carousel__button {
    width: 21px!important;
    height: 21px!important;
    transform: rotatez(45deg);
    margin-bottom: 10px
}
</style>