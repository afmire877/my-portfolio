import styles from './hero.module.css';
import React, {Fragment}from "react";
import Styled from 'styled-components';
import Icon from '../Common/icons';
import Particles from 'react-particles-js';
import { StaticQuery, graphql } from 'gatsby';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faGit} from "@fortawesome/free-brands-svg-icons";
import Tooltip from '@material-ui/core/Tooltip';
import Fade from 'react-reveal/Fade';
import VisbitlitySensor from 'react-visibility-sensor';


const Banner = Styled.div`
    grid-row: 1;
    font-weight: 300;
    color: white;
    z-index: 10;
    grid-column: 2/12;
    align-self: center;
    justify-self: center;
    color: white;
    text-align: center;
    display:grid;
    grid-gap: 15px;
`;





class Hero extends React.Component {
    
    
    render() {
       return (
        <Fragment >
            <Particles className={styles.particles}
            params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }}
            >
            </Particles>
            
            <Banner>
                <StaticQuery 
                query={graphql`
                {
                    site {
                      siteMetadata {
                        author{
                          name
                          title
                          minibio
                        }
                        social{
                          twitter
                          github
                          linkedin
                          medium
                          dev
                        }
                      }
                    }
                }
                `}
                render={(
                    {
                      site: {
                          siteMetadata: {
                            author,
                            social
                          }
                      }  
                    }
                ) => {
                    return (
                        <Fragment>
                            {/* <VisbitlitySensor >
                                {({isVisible}) => ''}
                            </VisbitlitySensor> */}
                            <Fade top cascade>
                                    <h1>Hi, I'm <span className={styles.name}>{author.name}</span></h1>
                                    <h2>{author.title}</h2>
                                <div className={styles.socialsIcons}>
                                    <Icon icon={faTwitter} href={social.twitter} />
                                    <Icon icon={faLinkedin} href={social.linkedin}/>
                                    <Icon icon={faGithub} href={social.github}/>
                                    <Icon icon={faFilePdf} href={social.resume}/>
                                </div>
                            </Fade>
                        </Fragment>
                    )
                }}
                />

            </Banner>
       </Fragment>
        
       );
    }
}


export default Hero;