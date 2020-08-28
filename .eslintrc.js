module.exports = {
    root: true,
    env: {
        node: true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended"
    ],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "semi": ["warn", "always"],
        "quotes": ["error", "double", { "allowTemplateLiterals": true }],
        "indent": ["warn", 4],
        "no-unused-vars": ["warn", "always"]
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)"
            ],
            env: {
                mocha: true
            }
        }
    ]
};
