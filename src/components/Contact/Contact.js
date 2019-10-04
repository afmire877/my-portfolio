import './contact.css'
import React from 'react';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 

 const Contact = () => {
     return (

        <div className="container contact__content">
            <h1 className="heading">Contact</h1>
            
            <h3 className="contact__cta">Feel free to contact me, if you have any enquires</h3>
            <div className="links">
                <a href="https://github.com/afmire877" >
                <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a href>
                <FontAwesomeIcon icon={faTwitter}  size="3x"/>
                </a>
                <a href="https://www.linkedin.com/in/ahmedmire">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <a href="https://www.dropbox.com/s/irxennui6p5rv94/cv-1.pdf?dl=1">
                <FontAwesomeIcon icon={faFilePdf}  size="3x"/>
                </a>
            </div>
        </div>

     );
 }
 
 export default Contact; 