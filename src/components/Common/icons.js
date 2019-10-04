import React from 'react';
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
// import { faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from '@material-ui/core/Link';
import Styled from 'styled-components';

    const icons = [
        {
            icon: 'faGithub',
            href: 'https://github.com/afmire877'
        },
        {
            icon: 'faTwitter',
            href: 'https://twitter.com/fuadcodes'
        },
        {
            icon: 'faLinkedin',
            href: 'https://www.linkedin.com/in/ahmedmire'
        },
        {
            icon: 'faFilePdf',
            href: 'https://www.dropbox.com/s/irxennui6p5rv94/cv-1.pdf?dl=1'
        },
    ]




class Icon extends React.Component {





render () {
    return icons.map(icon => <Link href={icon.href} >
        <FontAwesomeIcon icon={icon.icon} size="3x" />
        </Link> );
    // <a href=${icon.href} >
    // <FontAwesomeIcon icon={faGithub} size="3x" />
    // </a>
    // <a href>
    // <FontAwesomeIcon icon={faTwitter}  size="3x"/>
    // </a>
    // <a href="https://www.linkedin.com/in/ahmedmire">
    // <FontAwesomeIcon icon={faLinkedin} size="3x" />
    // </a>
    // <a href="https://www.dropbox.com/s/irxennui6p5rv94/cv-1.pdf?dl=1">
    // <FontAwesomeIcon icon={faFilePdf}  size="3x"/>
    // </a>
}
}

export default Icon;