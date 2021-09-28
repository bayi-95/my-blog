module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:prettier/recommended',
	],
	globals: {
		NativeSupportApi: true,
		BrowserApi: true,
	},
	rules: {
		'prettier/prettier': 'warn',
		'no-console': 'off',
		'no-irregular-whitespace': 'off',
		'no-undef': 'off',
		'no-redeclare': 'off',
		'no-useless-escape': 'off',
		'no-debugger': 'warn',
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
}
