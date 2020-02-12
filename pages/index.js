import Layout from "../components/Layout";

import { attributes, react as BodyContent } from '../content/home.md';


export default () => {
  let { title, cats } = attributes; 
  return ( <Layout>
      <BodyContent />
      <ul>
        {cats.map((cat, k) => (
          <li key={k}>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </li>
        ))}
      </ul>
    </Layout> )};