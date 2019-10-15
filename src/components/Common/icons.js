import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from '@material-ui/core/Link';



class Icon extends React.Component {

    render () {
        return (
            <Link href={this.props.href} >
                <FontAwesomeIcon icon={this.props.icon}  size={this.props.size}/>
            </Link> );
    }
}
Icon.defaultProps = {
    size: "3x"
}
export default Icon;