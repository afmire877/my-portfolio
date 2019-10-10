import './contact.css'
import React from 'react';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Icon from '../Common/icons'
 

 const Contact = () => {
     return (

        <div className="container contact__content">
            <h1 className="heading">Contact</h1>
            
            <h3 className="contact__cta">Feel free to contact me, if you have any enquires</h3>
            <div className="links">
                <Icon href={'https://github.com/afmire877'} icon={faGithub}/>
                <Icon icon={faTwitter}  size="3x"/>
                <Icon href="https://www.linkedin.com/in/ahmedmire" icon={faLinkedin} size="3x" />
                <Icon href="https://www.dropbox.com/s/irxennui6p5rv94/cv-1.pdf?dl=1" icon={faFilePdf}  size="3x"/>
            </div>
        </div>

     );
 }
 
 export default Contact; 