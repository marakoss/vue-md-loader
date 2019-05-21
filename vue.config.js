var md = require('markdown-it');

module.exports = {
	chainWebpack: config => {
		config.module
		.rule('md')
		.test(/\.md$/)
		.use('vue-loader')
		.loader('vue-loader')
		.tap(options => {
			return options
		})
		.end()
		.use('vue-md-loader')
		.loader('vue-md-loader')
		.tap(options => {
			return {
				...options,
				preProcess: function(template) {
				  return `<div>${template}</div>`
				},
				rules: {
					'fence':  function (token, id, opt, env, slf) {
						// extend the original function
						return '<div class="code-block">'
							+ md().renderer.rules.fence(token, id, opt, env, slf)
							+ '<button class="clipboard">Copy</button>'
							+ '</div>';
					}
				}
			}
		})
		.end();

		config.module
		.rule('ts')
		.test(/\.ts$/)
		.use('ts-loader')
		.loader('ts-loader')
		.tap(options => {
			return {
				...options,
				appendTsSuffixTo: [/\.vue$/],
			}
		})
		.end();
	}
}