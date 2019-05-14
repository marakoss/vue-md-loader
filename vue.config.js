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
			return options
		})
		.end();

		config.module
		.rule('ts')
		.test(/\.ts$/)
		.use('ts-loader')
		.loader('ts-loader')
		.tap(options => {
			return {appendTsSuffixTo: [/\.vue$/]}
		})
		.end();
	}
}