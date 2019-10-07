import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from '@material-ui/core/Link';

    // const icons = [
    //     {
    //         icon: 'faGithub',
    //         href: 'https://github.com/afmire877'
    //     },
    //     {
    //         icon: 'faTwitter',
    //         href: 'https://twitter.com/fuadcodes'
    //     },
    //     {
    //         icon: 'faLinkedin',
    //         href: 'https://www.linkedin.com/in/ahmedmire'
    //     },
    //     {
    //         icon: 'faFilePdf',
    //         href: 'https://www.dropbox.com/s/irxennui6p5rv94/cv-1.pdf?dl=1'
    //     },
    // ]




class Icon extends React.Component {

render () {
    return (
        <Link href={this.props.href} >
            <FontAwesomeIcon icon={this.props.icon} size="3x" />
        </Link> );
}
}

export default Icon;