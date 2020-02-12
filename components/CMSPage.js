import CMS from 'netlify-cms'
import Homepage from "./Homepage";

function handleChange(entry, f) {
  const data = entry.getIn(['data']).toJS();
  return data ?
    (f(data)) :
    (<div>Loading...</div>); // TODO: make this a spinner!
}

CMS.registerPreviewTemplate('index', ({ entry, getAsset, widgetFor }) => {
  handleChange(entry, data => (<Homepage title={data.title} cats={data.cats}>{widgetFor('body')}</Homepage>));
});

export default CMS;