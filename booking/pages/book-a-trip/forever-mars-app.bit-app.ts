import { ViteReact } from '@bitdev/react.app-types.vite-react';
// import {
//   Netlify,
//   type NetlifyOptions,
// } from '@teambit/cloud-providers.deployers.netlify';

// const netlifyConfig: NetlifyOptions = {
//   team: 'teambit',
//   accessToken: process.env.NETLIFY_AUTH_TOKEN as string,
//   productionSiteName: 'cosmos-cruises-forever-mars',
//   useDefaultRedirectsForSPA: true,
// };

export default ViteReact.from({
  /**
   * name of your app.
   */
  name: 'booking',
  /**
   * pipeline for deployment of the app.
   */
  // deploy: Netlify.deploy(netlifyConfig),
});
