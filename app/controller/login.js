const Controller = require('egg').Controller;

class LoginController extends Controller {
	async index() {
		const { ctx } = this;
		const verify = await ctx.service.login.LoginCheck(ctx.query);
		const token = await ctx.service.login.CreateToken(ctx.query);
		let status = verify && verify.length > 0 ? 'success' : 'error';
		ctx.body = {
			status: 200,
			msg: status,
			token:token,
		};
	}
}
module.exports = LoginController;