module.exports = {
    "extends": ["airbnb-base", "plugin:jest/recommended"],
    "parser": "typescript-eslint-parser",
    rules: {
        strict: 0,
        semi: 2,
        "arrow-parens": [2, "always"],
        "import/no-unresolved": 0, // because typescript already check for it
        "import/extensions": 0,
        "import/prefer-default-export": 0,
        "import/no-extraneous-dependencies": ["error", { "devDependencies": ["**/*.test.ts", "**/testApi.ts"] }],
        "typescript/no-unused-vars": 2,
    },
    "plugins": [
        "typescript",
        "jest"
    ],
    "env": {
        "jest/globals": true
    }
};