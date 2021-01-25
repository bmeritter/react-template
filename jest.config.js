module.exports = {
	"moduleFileExtensions": [
		"js",
		"jsx"
	],
	"transformIgnorePatterns": [
		"/node_modules/"
	],
	"collectCoverage": true,
	"collectCoverageFrom": [
		"src/**/*.{js,jsx}"
	],
	"coverageThreshold": {
		"global": {
			"branches": 0,
			"functions": 0,
			"lines": 0,
			"statements": -100
		}
	}
}
