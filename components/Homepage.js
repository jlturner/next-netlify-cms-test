import Layout from "./Layout";

export default (title, cats) => {
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