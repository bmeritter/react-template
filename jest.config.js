module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		"^.+\\.tsx?$": "ts-jest"
	},
	transformIgnorePatterns: [
		"node_modules"
	],
	moduleFileExtensions: [
		"ts",
		"tsx",
		"js"
	],
	setupFiles: ['./setupTests.ts'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	snapshotSerializers: ["enzyme-to-json/serializer"],
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.{js,ts,tsx}'
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 10,
			lines: 7,
			statements: 0
		}
	}

};
