<template>
  <div class="bianjiform">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="id">
        <div>{{form.id}}</div>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="生日">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="性别">
        <el-radio-group v-model="form.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="个性签名">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import bus from "../utils/busEvent.js";
export default {
  data() {
    return {
      form: {
        id: "",
        name: "",
        date1: "",
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("http://localhost:8080/upxinxi", {
          username: this.form.name,
          birth: this.form.date1,
          sex: this.form.resource,
          gxqianming: this.form.desc
        })
        .then(response => {
          alert("修改成功");
          bus.$emit("gaimz", this.from.name);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getmz() {
      axios
        .get("http://localhost:8080/getmz", {
          params: {
            username: "qwe"
          }
        })
        .then(response => {
          this.form.id = response.data.id;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getmz();
  }
};
</script>

<style>
.bianjiform {
  width: 400px;
  margin: auto;
  padding-top: 45px;
  padding-right: 100px;
}
</style>