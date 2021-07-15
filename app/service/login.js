'use strict';
const Service = require('egg').Service;
class Login extends Service {
	async LoginCheck(params) { //登录接口
		let name = params.username;
		let password = params.password;
		const user = await this.app.mysql.select('user', {
			where: { username: name, password: password }, // WHERE 条件
			limit: 1, // 返回数据量
		});
		return user;
	}
	async CreateToken(value) { // 创建token 
		const { ctx, app } = this;
		const token = app.jwt.sign({
			username: value,
		}, app.config.jwt.secret);
		return token;
	}
}
module.exports = Login;