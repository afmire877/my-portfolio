import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = props => <FontAwesomeIcon {...props} />;

Icon.defaultProps = {
  size: "3x"
};
export default Icon;
