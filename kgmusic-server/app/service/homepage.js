'use strict';

const Service = require('egg').Service;
class AdminService extends Service {
    async upimg(tximg) {
        const { app } = this;
        let result = await app.mysql.update('user', tximg, { where: { id: 1 } });
        return result;
    }

    async xianshi(id) {
        const { app } = this;
        let result = await app.mysql.get('user', { id });
        return result;
    }
    async uptuijianimg(tximg) {
        const { app } = this;
        let result = await app.mysql.update('user', tximg, { where: { id: 1 } });
        return result;
    }
    async upxinxi(data) {
        const { app } = this;
        let result = await app.mysql.update('user', data, { where: { id: 1 } });
        return result;
    }

    async upmima(password) {
        const { app } = this;
        let result = await app.mysql.update('user', password, { where: { id: 1 } });
        return result;
    }

    async getmz(username) {
        const { app } = this;
        let result = await app.mysql.get('user', {username});
        return result;
    }


}

module.exports = AdminService;