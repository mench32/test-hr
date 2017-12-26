module.exports = {
    'extends': 'standard',
    parser: 'babel-eslint',
    rules: {
        indent: [
			'error',
			'tab',
			{ SwitchCase: 1 }
        ],
        'no-tabs': 0,
        semi: [
			'error',
			'always'
        ],
        "react/jsx-uses-vars": "warn",
        "react/jsx-uses-react": "warn",
        'space-before-function-paren': 0,
        // 'object-curly-spacing': ['error', 'never']
    },
    settings: {
		// 'import/resolver': 0,
		react: {
			createClass: 'Component', // Regex for Component Factory to use, default to 'createReactClass'
			pragma: 'React',  // Pragma to use, default to 'React'
			version: '16.0.2', // React version, default to the latest React stable release
			flowVersion: '0.53' // Flow version
		},
		propWrapperFunctions: [ 'forbidExtraProps' ], // The names of any functions used to wrap the propTypes object, such as `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
	},
    parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		allowImportExportEverywhere: false,
		codeFrame: false,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
	},
    plugins: [
		'react',
        'import',
        'class-property'
	],

};
