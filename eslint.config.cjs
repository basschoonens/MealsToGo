// eslint.config.cjs
const { FlatCompat } = require("@eslint/eslintrc");
const { configs: jsConfigs } = require("@eslint/js");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: jsConfigs.recommended,
    resolvePluginsRelativeTo: __dirname,
});

module.exports = [
    // 1) which files/dirs to ignore entirely
    { ignores: ["node_modules/**", "babel.config.js", "eslint.config.cjs"] },

    // 2) global plugin settings (so eslint-plugin-react can detect your React version)
    {
        settings: {
            react: { version: "detect" }
        }
    },

    // 3) pull in the official rule-sets
    ...compat.extends(
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react-native/all",
        "plugin:prettier/recommended"
    ),

    // 4) how to parse your JS/JSX, plus any overrides
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            parser: require("@babel/eslint-parser"),
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ["module:metro-react-native-babel-preset"]
                },
                ecmaVersion: 2021,
                sourceType: "module",
                ecmaFeatures: { jsx: true }
            }
        },
        rules: {
            "no-console": "warn",
            "react-native/no-inline-styles": "off",
            "react/react-in-jsx-scope": "off",
            "react-native/no-color-literals": "off",
            "quotes": [2, "double", { "avoidEscape": true }],
            "prettier/prettier": ["error", { singleQuote: false, endOfLine: "auto" }]
        }
    }
];
