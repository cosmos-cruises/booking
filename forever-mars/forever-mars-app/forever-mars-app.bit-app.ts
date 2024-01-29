import { ViteReact } from '@bitdev/react.app-types.vite-react';
import {
  Netlify,
  type NetlifyOptions,
} from '@teambit/cloud-providers.deployers.netlify';

const netlifyConfig: NetlifyOptions = {
  team: 'teambit',
  accessToken: process.env.NETLIFY_AUTH_TOKEN as string,
  productionSiteName: 'cosmos-cruises-forever-mars',
  useDefaultRedirectsForSPA: true,
};

export default ViteReact.from({
  /**
   * name of your app.
   */
  name: 'forever-mars',

  /**
   * determine whether to use ssr mode or not.
   */
  ssr: false,

  /**
   * vite config for the browser target.
   * if config is empty or doesn't include
   * plugins,
   */
  // viteConfigPath: 'vite.config.js'

  /**
   * vite config for the node target.
   */
  // viteServerBuildConfigPath: 'vite-server.config.js',

  /**
   * configure port range for the dev server to use.
   */
  // portRange: [3000, 3200]

  /**
   * configure the server app root filename.
   * defaults to: `server.app-root`
   */
  // serverRoot: 'server.app-root',

  /**
   * name of the bit artifact of persist.
   * this later can be fetched, and used for deployment and execution.
   */
  // artifactName: 'app-bundle',

  /**
   * pipeline for deployment of the app.
   */
  deploy: Netlify.deploy(netlifyConfig),
});
