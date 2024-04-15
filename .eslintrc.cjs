/* eslint-disable import/unambiguous, import/no-commonjs */

module.exports = {
    'extends': [
        '@chimericdream',
        '@chimericdream/import',
        '@chimericdream/typescript',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        ecmaVersion: 2020,
        extraFileExtensions: ['.cjs'],
        project: './tsconfig.eslint.json',
        sourceType: 'module',
    },
    'env': {
        browser: false,
        es6: true,
        node: true,
    },
    'settings': {
        'import/parsers': {
            '@typescript-eslint/parser': [
                '.ts',
                '.tsx',
                '.d.ts',
            ],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.eslint.json',
            },
        },
    },
    'rules': {
        '@typescript-eslint/no-magic-numbers': 'off',

        'import/dynamic-import-chunkname': 'off',
        'import/no-nodejs-modules': 'off',

        'no-restricted-imports': 'off',

        'no-sync': 'off',

        'no-underscore-dangle': 'off',
    },
};
