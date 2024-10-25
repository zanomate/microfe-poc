import { pluginModuleFederation } from '@module-federation/rsbuild-plugin'
import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { REMOTE_DOMAIN, REMOTE_PORT } from '../../config'

export default defineConfig({
  output: {
    assetPrefix: REMOTE_DOMAIN,
  },
  html: {
    title: 'REMOTE'
  },
  server: {
    port: REMOTE_PORT,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'app_remote',
      exposes: {
        './App': './src/App',
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
        },
        'react-dom': {
          singleton: true,
          eager: true,
        },
      },
    }),
  ],
})
