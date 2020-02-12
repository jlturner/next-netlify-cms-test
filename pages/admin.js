import dynamic from 'next/dynamic';

const CMSDynamic = dynamic(() => import('../components/CMSPage'));

export default () => {
  return(<>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <CMSDynamic />
    </Head>
  </>);
};