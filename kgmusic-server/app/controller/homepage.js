'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs');

class HomeController extends Controller {
  async upimg() {
    const { ctx, service } = this;
    const dest = '/public/uploads/';
    const file = ctx.request.files[0];
    // 拷贝文件到指定的文件夹
    let to = path.dirname(__dirname) + dest + path.basename(file.filepath);
    await fs.copyFileSync(file.filepath, to);
    fs.unlinkSync(file.filepath);//删除临时文件
    // 返回值应该是图片的访问路径
    // 返回图片路径  this.app.config  获取配置信息
    let cluster = this.app.config.cluster.listen;
    // 客户端要求是json格式
    let imgsrc = `http://${cluster.hostname}:${cluster.port}${dest}${path.basename(file.filepath)}`;
    let img = { tximg: imgsrc }
    await service.homepage.upimg(img);
    ctx.body = {
      code: 1,
      src: imgsrc
    };
  }
  async xianshi() {
    const { ctx, service } = this;
    let formData = ctx.request.query;
    let result = await service.homepage.xianshi(formData.id);
    ctx.body = result;
  }

  async uptuijianimg() {
    const { ctx, service } = this;
    let formData = ctx.request.query;
    let result = await service.homepage.uptuijianimg(formData);
    ctx.body = result;
  }

  async upxinxi() {
    const { ctx, service } = this;
    let formData = ctx.request.body;
    let result = await service.homepage.upxinxi(formData);
    ctx.body = result;
  }

  async upmima() {
    const { ctx, service } = this;
    let formData =  ctx.request.query;
    let result = await service.homepage.upxinxi(formData);
    ctx.body = result;
  }
  async getmz() {
    const { ctx, service } = this;
    console.log(ctx.request.query)
    let formData =  ctx.request.query;
    let result = await service.homepage.getmz(formData.username);
    console.log(result)
    ctx.body = result;
  }
}

module.exports = HomeController;
