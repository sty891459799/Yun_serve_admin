module.exports = options => {
	return async function auth(ctx, next) {
		const token = ctx.request.header.tiantoken;
		let decode;
		if (token) {
			try {
				// 解码token
				decode = ctx.app.jwt.verify(token, options.secret);
				await next();
			} catch (error) {
				ctx.status = 401;
				ctx.body = {
					msg: 'error',
					msgerror: 'Token_error'
				};
				return;
			}
		} else {
			ctx.status = 401;
			ctx.body = {
				msg: 'error',
				msgerror: 'Token_not_find'
			};
			return;
		}
	};
};