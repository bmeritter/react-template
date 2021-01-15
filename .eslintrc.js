module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"babel",
		"react"
	],
	"ignorePatterns": [ "webpack.config.js", "postcss.config.js", ".eslintrc.js" ],
	"rules": {
		"semi": [ "error", "always" ],
		"quotes": ["error", "single"],
		"quote-props": ["error", "always"],
		"jsx-quotes": ["error", "prefer-double"],
		"no-console": "error"
	}
};
