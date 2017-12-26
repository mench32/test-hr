process.traceDeprecation = true;
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { DefinePlugin, HotModuleReplacementPlugin } = webpack;

const stats = {
	assets: false,
	assetsSort: 'field',
	cached: true,
	cachedAssets: false,
	children: false,
	chunks: false,
	chunkModules: false,
	chunkOrigins: false,
	chunksSort: 'field',
	colors: true,
	depth: false,
	entrypoints: true,
	env: false,
	errors: true,
	errorDetails: true,
	hash: false,
	maxModules: 15,
	modules: false,
	modulesSort: 'field',
	moduleTrace: false,
	performance: false,
	providedExports: false,
	publicPath: false,
	reasons: false,
	source: false,
	timings: false,
	usedExports: false,
	version: false,
	warnings: true
};

module.exports = environment => {
	const env = Object.assign({}, environment);
	env.dev = env.dev || false;
	env.production = env.production || false;
	env.minimize = env.minimize || false;

	const config = {

		entry: {
			app: [
				'babel-polyfill',
				'react-hot-loader/patch',
				'./src/index.jsx'
			]
		},

		output: {
			filename: 'js/[name].js',
			path: path.resolve(__dirname, 'dist/static'),
			publicPath: '/'
		},

		devtool: env.production ? false : 'inline-source-map',

		resolve: {
			alias: {
				ui: path.resolve(__dirname, 'src/ui'),
				components: path.resolve(__dirname, 'src/components'),
				reducers: path.resolve(__dirname, 'src/reducers'),
				actions: path.resolve(__dirname, 'src/actions'),
				constants: path.resolve(__dirname, 'src/constants'),
				store: path.resolve(__dirname, 'src/store'),
				containers: path.resolve(__dirname, 'src/containers'),
				icons: path.resolve(__dirname, 'src/icons')
			},
			extensions: ['.js', '.jsx']
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: 'src/index.html'
			}),
			new webpack.NamedModulesPlugin(),
			new HotModuleReplacementPlugin(),
			new DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(env.production ? 'production' : 'development')
			})
		],

		module: {
			rules: [
				{
					test: /\.jsx?$/,
					loader: 'babel-loader',
					include: [
						path.resolve(__dirname, 'src')
					]
				},
				{
					test: /\.styl$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true,
								localIdentName: '[name]_[local]_[hash:base64:5]'
							}
						},
						{
							loader: 'postcss-loader',
							options: { sourceMap: true }
						},
						'stylus-loader'
					],

					include: [
						path.resolve(__dirname, 'src')
					]
				},

				// fonts
				{
					test: /\.(woff|woff2|eot|ttf)/,
					include: [path.resolve(__dirname, 'src')],
					use: 'url-loader?name=/assets/fonts/[name].[hash].[ext]'
				},

				// jpg
				{
					test: /\.jpg$/,
					include: [path.resolve(__dirname, 'src')],
					use: 'url-loader?limit=10&mimetype=image/jpg&name=/assets/[name].[hash].[ext]'
				},

				// png
				{
					test: /\.png$/,
					include: [path.resolve(__dirname, 'src')],
					use: 'url-loader?limit=10&mimetype=image/png&name=assets/[name].[hash].[ext]'
				},

				// json
				{
					test: /\.json$/,
					include: [
						path.resolve(__dirname, 'src')
					],
					use: 'json-loader'
				}
			]
		},

		devServer: {
			stats,
			contentBase: path.join(__dirname, 'dist'),
			port: 3000,
			host: '0.0.0.0',
			compress: true,
			hot: true,
			https: false,
			historyApiFallback: true,
			disableHostCheck: true
		}
	};

	if (env.minimize) {
		config.plugins.push(new UglifyJSPlugin());
	}

	return config;
};
