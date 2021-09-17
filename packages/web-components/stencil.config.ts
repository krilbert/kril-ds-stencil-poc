import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { reactOutputTarget } from '@stencil/react-output-target'

export const config: Config = {
  namespace: 'web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: 'dist/stencil',
      copy: [
        { src: 'css', dest: '../css' },
        { src: 'assets', dest: '../web-components/assets' },
      ],
    },
    {
      type: 'www',
      dir: '../../playground/html',
      indexHtml: 'index.html',
      serviceWorker: null,
    },
    { type: 'dist-hydrate-script', dir: 'dist/hydrate' },
    { type: 'dist-custom-elements-bundle' },
    { type: 'docs-readme' },
    { type: 'www', serviceWorker: null },
    reactOutputTarget({
      componentCorePackage: '@kril-ds/core',
      proxiesFile: '../react-lib/src/components.ts',
      loaderDir: 'dist/loader',
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),
  ],
  plugins: [sass()],
}
