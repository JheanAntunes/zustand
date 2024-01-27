module.exports = {
	plugins: ['testing-library', "jest-dom"],
    extends: ['airbnb', 'plugin:prettier/recommended','plugin:testing-library/react', "plugin:jest-dom/recommended"],

	// 2) We load other plugins than eslint-plugin-testing-library globally if we want to.
	plugins: ['react-hooks'],

	overrides: [
		{
			// 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react'],
		},
	],
};