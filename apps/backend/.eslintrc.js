module.exports = {
	root: true,
	extends: ['appman/backend'],
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	ignorePatterns: ['.eslintrc.js'],
}
