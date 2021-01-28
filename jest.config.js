module.exports = {
	"moduleFileExtensions": [
		"js",
		"jsx"
	],
	"transformIgnorePatterns": [
		"/node_modules/"
	],
	"transform": {
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
			'jest-transform-stub',
		'^.+\\.(js|jsx)?$': 'babel-jest'
	},
	"moduleNameMapper": {
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	"collectCoverage": true,
	"collectCoverageFrom": [
		"src/**/*.{js,jsx}"
	],
	"coverageThreshold": {
		"global": {
			"branches": 80,
			"functions": 10,
			"lines": 7,
			"statements": -12
		}
	}
}
