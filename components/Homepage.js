import Layout from "./Layout";

export default (props) => {
  const {cats, title} = props;
  return ( <Layout>
      <ul>
        {cats.map((cat, k) => (
          <li key={k}>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </li>
        ))}
      </ul>
      {props.children}
    </Layout> )};