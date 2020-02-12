import dynamic from 'next/dynamic';
import Head from 'next/head';

const CMSDynamic = dynamic(() => import('../components/CMSPage'), { ssr: false });

export default () => {
  return(<>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
    <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
    <CMSDynamic />
  </>);
};