import Homepage from "../components/Homepage";

import { attributes, react as BodyContent } from '../content/home.md';

export default (props) => {
  let { title, cats } = attributes;
  return (
    <Homepage title={title} cats={cats}>
      <BodyContent />
    </Homepage>);
};