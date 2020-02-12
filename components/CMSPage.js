import Homepage from "./Homepage";

function handleChange(entry, f) {
  const data = entry.getIn(['data']).toJS();
  return data ?
    (f(data)) :
    (<div>Loading...</div>); // TODO: make this a spinner!
}

export default ()=>{
  if(global.window) {
    window.CMS.registerPreviewTemplate('index', ({ entry, getAsset, widgetFor }) => {
      handleChange(entry, data => (<Homepage title={data.title} cats={data.cats}>{widgetFor('body')}</Homepage>));
    });
  }
  return (<></>);
};