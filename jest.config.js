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
			"branches": 80,
			"functions": 10,
			"lines": 7,
			"statements": -12
		}
	}
}
