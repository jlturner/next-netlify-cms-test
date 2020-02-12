import dynamic from 'next/dynamic';

const CMSDynamic = dynamic(() => {
  import CMS from 'netlify-cms-app'
  import Homepage from "../components/Homepage";

  function handleChange(entry, f) {
    const data = entry.getIn(['data']).toJS();
    return data ?
      (f(data)) :
      (<div>Loading...</div>); // TODO: make this a spinner!
  }

  CMS.registerPreviewTemplate('index', ({ entry, getAsset }) => {
    handleChange(entry, data => (<Homepage title={data.title} cats={data.cats} />));
  })
})
  
export default () => {
  return(<>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <CMSDynamic />
    </Head>
  </>);
};