import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ href, icon, size }) => (
  <FontAwesomeIcon icon={icon} size={size} {...this.props} />
);

Icon.defaultProps = {
  size: "3x"
};
export default Icon;
