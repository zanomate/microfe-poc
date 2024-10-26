import { pluginModuleFederation } from '@module-federation/rsbuild-plugin'
import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { CONTAINER_PORT, REMOTE_DOMAIN } from '../../config'

export default defineConfig({
  html: {
    title: 'CONTAINER'
  },
  server: {
    port: CONTAINER_PORT,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'app-container',
      remotes: {
        app_remote: `app_remote@${REMOTE_DOMAIN}/mf-manifest.json`,
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
