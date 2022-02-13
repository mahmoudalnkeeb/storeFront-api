module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        allowImportExportEverywhere: true,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },

    env: {
        es6: true,
    },
};
