import { Config } from '@stencil/core';

export const config: Config = {
  extras: {
    // fixes VitePress doc build
    enableImportInjection: true,
  },
  namespace: 'zane-icons',
  outputTargets: [
    {
      esmLoaderPath: '../loader',
      type: 'dist',
    },
    {
      customElementsExportBehavior: 'auto-define-custom-elements',
      generateTypeDeclarations: false,
      type: 'dist-custom-elements',
    },
    {
      serviceWorker: null, // disable service workers
      type: 'www',
    },
  ],
};
