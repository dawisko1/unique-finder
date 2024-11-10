import eslint from '@eslint/js'
import * as typescriptEslint from 'typescript-eslint'

export default typescriptEslint.config(
  eslint.configs.recommended,
  ...typescriptEslint.configs.recommended,
)
