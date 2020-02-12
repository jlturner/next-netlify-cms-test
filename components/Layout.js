import Header from "./Header";
import Link from "next/link";
import Head from "next/head";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const RoutePostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default (props) => (
  <div style={layoutStyle}>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
    <Header />
    <ul>
      <PostLink title="Yo dawg" />
      <PostLink title="Yo mama" />
      <PostLink title="Yoyos" />
      <RoutePostLink id="better-links" />
      <RoutePostLink id="yoyoyo" />
    </ul>
    {props.children}
  </div>
);