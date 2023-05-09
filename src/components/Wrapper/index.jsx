import PropTypes from "prop-types";

import "./styles.css";

export function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
