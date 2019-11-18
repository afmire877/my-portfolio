import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import Icon from "../Common/icons";
import Styled from "styled-components";
import { device } from "../Common/desktop";

const Wrapper = Styled.div`
    color: white;
    text-align: center;
    margin-top: 50px;
    padding: 100px ; 
    background: #2634F2;

    @media ${device.mobileL} {
        font-size: 1rem;
    }
`;

const IconLinks = Styled.div`

    margin: 30px auto 0 auto;
    display: flex;
    justify-content: space-between;
    width: 500px;
    flex-wrap: wrap;

    @media ${device.mobileL} {
        font-size: 0.7rem;
        width: 100%;
    }
    @media ${device.tablet} {
        font-size: 0.7rem;
        width: 100%;
    }

& a:visited,
& a {
    color: white;
}   
`;

const MailLink = Styled.p`
    margin-top: 10px;
    & a {
        text-decoration: none;
        color: white;
    }
        `;

const Heading = Styled.h1`
margin: 30px 0 20px 0;
`;

export default () => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              social {
                resume
                medium
                linkedin
                github
                dev
                twitter
                email
              }
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { social }
        }
      }) => (
        <Wrapper>
          <Heading id="contact">Contact </Heading>

          <h3 className="contact__cta">
            Feel free to contact me, if you have any enquires
          </h3>
          <MailLink>
            <a href={`mailto:${social.email}`}>{social.email}</a>
          </MailLink>
          <IconLinks>
            <Icon href={social.github} icon={faGithub} />
            <Icon href={social.twitter} icon={faTwitter} size="3x" />
            <Icon href={social.linkedin} icon={faLinkedin} size="3x" />
            <Icon href={social.resume} icon={faFilePdf} size="3x" />
          </IconLinks>
        </Wrapper>
      )}
    />
  );
};
