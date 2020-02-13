import Head from 'next/head';

class CMSPostLoad extends React.Component {
  render() {
    return <input type="hidden" />
  }

  componentDidMount() {
    if(typeof window !== undefined) {
      function handleChange(entry, f) {
        const data = entry.getIn(['data']).toJS();
        return data ?
          (f(data)) :
          (<div>Loading...</div>); // TODO: make this a spinner!
      }
    
      // Page Preview Bindings
      window.CMS.registerPreviewTemplate('index', ({ entry, getAsset, widgetFor }) => {
        handleChange(entry, data => (<Homepage title={data.title} cats={data.cats}>{widgetFor('body')}</Homepage>));
      });
    }
  }
}

export default () => {
  return(<>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
    <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
    <CMSPostLoad />
  </>);
};
