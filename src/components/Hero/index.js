import './hero.css';
import React, {Fragment}from "react";
import Styled from 'styled-components';
import Icon from '../Common/icons';
import Particles from 'react-particles-js';
import { StaticQuery, graphql } from 'gatsby';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faGit} from "@fortawesome/free-brands-svg-icons";

const Banner = Styled.div`
    grid-row: 1;
    font-weight: 300;
    color: white;
    z-index: 10;
    grid-column: 5/9;
    align-self: center;
    justify-self: center;
    color: white;
    text-align: center;
`;





class Hero extends React.Component {
    
    
    render() {
       return (
        <Fragment >
            <Particles className='particles'
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
                        <h1>Hi, I'm {author.name}</h1>
                        <h2>{author.title}</h2>
                        <div className="socialsIcons">
                            <Icon icon={faTwitter} href={social.twitter}/>
                            <Icon icon={faLinkedin} href={social.linkedin}/>
                            <Icon icon={faGithub} href={social.github}/>
                            <Icon icon={faFilePdf} href={social.resume}/>
                        </div>

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