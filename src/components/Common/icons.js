import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@material-ui/core/Link";

class Icon extends React.Component {
  render() {
    const { href, icon, size } = this.props;
    return <FontAwesomeIcon icon={icon} size={size} />;
  }
}
Icon.defaultProps = {
  size: "3x"
};
export default Icon;
