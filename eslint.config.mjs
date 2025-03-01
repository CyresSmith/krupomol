import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';

import parser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

const patchedConfig = fixupConfigRules([...compat.extends('next/core-web-vitals')]);

const config = [
    ...patchedConfig,
    ...ts.configs.recommended,
    ...ts.configs.strict,
    ...ts.configs.stylistic,
    ...ts.configs.recommendedTypeChecked,
    ...ts.configs.stylisticTypeChecked,
    prettierConfig,
    prettierConfigRecommended,
    {
        languageOptions: {
            parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            perfectionist,
        },
        rules: {
            'perfectionist/sort-array-includes': ['error'],
            'perfectionist/sort-classes': ['error'],
            'perfectionist/sort-decorators': ['error'],
            'perfectionist/sort-enums': ['error'],
            'perfectionist/sort-exports': ['error'],
            'perfectionist/sort-heritage-clauses': ['error'],
            'perfectionist/sort-interfaces': ['error'],
            'perfectionist/sort-intersection-types': ['error'],
            'perfectionist/sort-jsx-props': ['error'],
            'perfectionist/sort-maps': ['error'],
            'perfectionist/sort-modules': ['error'],
            'perfectionist/sort-named-exports': ['error'],
            'perfectionist/sort-named-imports': ['error'],
            'perfectionist/sort-object-types': ['error'],
            'perfectionist/sort-objects': ['error'],
            'perfectionist/sort-sets': ['error'],
            'perfectionist/sort-switch-case': ['error'],
            'perfectionist/sort-union-types': ['error'],
            'perfectionist/sort-variable-declarations': ['error'],
        },
        settings: {
            perfectionist: {
                type: 'alphabetical',
                partitionByComment: true,
            },
        },
    },
    { ignores: ['.next/*', 'typings/*', '*.config.*'] },
];

export default config;
