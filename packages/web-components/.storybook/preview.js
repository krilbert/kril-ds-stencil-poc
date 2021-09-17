import { defineCustomElements } from '../dist/loader'

// Utils
import '../dist/stencil/css/core.css'

defineCustomElements()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Components'],
    },
  },
}
