module.exports = {
    root: true,
    env: {
        webextensions: true,
    },
    globals: {
        whale: "readonly",
    },
    extends: "@whale/eslint-config-whale-web/vue",
    rules: {
        // vue/strongly-recommended
        "vue/no-template-shadow": 0,
        "vue/require-default-prop": 0,
        "vue/require-prop-types": 0,
    },
    parserOptions: {
        parser: "babel-eslint",
    },
};
