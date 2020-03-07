<template>
  <div id="musician">
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#000"
      text-color="#fff"
      active-text-color="#0090FF"
    >
      <el-menu-item>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAiCAYAAACTHwETAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY2QTJBNUQxMUQ4NDExRUFBQkI5QUE2MjkxNzA3Qjk4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY2QTJBNUQyMUQ4NDExRUFBQkI5QUE2MjkxNzA3Qjk4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjZBMkE1Q0YxRDg0MTFFQUFCQjlBQTYyOTE3MDdCOTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjZBMkE1RDAxRDg0MTFFQUFCQjlBQTYyOTE3MDdCOTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Qb2HnAAAKZklEQVR42uxb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"
          alt
        />
      </el-menu-item>
      <el-menu-item index="1" class="qwe">
        <router-link to="/kgman">酷狗音乐人</router-link>
      </el-menu-item>

      <el-menu-item index="2">
        <router-link to="/homepage">个人中心</router-link>
      </el-menu-item>

      <el-menu-item index="3" class="yonghu" v-show="psa=='asd'">
        <router-link to="/homepage">
          <el-col :span="12">
            <div class="demo-basic--circle">
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
            </div>
          </el-col>
        </router-link>
      </el-menu-item>
    </el-menu>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      activeIndex2: "1",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"],
      psa: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if (key == 2||key==3) {
        this.psa = "asd";
      } else {
        this.psa = "";
      }
    },
    get(){
         axios
        .get("http://localhost:8080/xianshi", {
          params: {
            id: 1
          }
        })
        .then(response => {
          if (response.data.tximg == "") {
            this.circleUrl =
              "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png";
           
          } else {
            this.circleUrl = response.data.tximg;
        
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.get();

  }
};
</script>


<style >
* {
  margin: 0;
  padding: 0;
}
.el-menu-demo {
  height: 80px;
  font-size: 18px;
}
.el-menu--horizontal > .el-menu-item {
  height: 80px !important;
  line-height: 80px !important;
  font-size: 18px !important;
}
.qwe {
  margin-left: 80px !important;
  margin-right: 80px !important;
}
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
a {
  text-decoration: none;
}
.yonghu {
  position: absolute !important;
  right: 0 !important;
}
</style>
