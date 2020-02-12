import dynamic from 'next/dynamic';
import Head from 'next/head';

const CMSDynamic = dynamic(() => import('../components/CMSPage'));

export default () => {
  return(<>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
      <CMSDynamic />
    </Head>
  </>);
};