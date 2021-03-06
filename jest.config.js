module.exports = {
  roots: ['<rootDir>'],
  testMatch: [
    "./test/**/*.+(ts|tsx|js)",
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
