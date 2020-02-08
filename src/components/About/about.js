import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";
import Heading from "../Common/heading";
import Styled from "styled-components";
import { device } from "../Common/desktop";
import Typed from "react-typed";
import { Container, Tooltip } from "@material-ui/core";

const Content = Styled.div`
 grid-row: 5;
 grid-column: 2/12;
 align-items: center;
 display: flex;
 color: #2d2c2cdb;
 font-size: 19px;

 @media ${device.mobileL} {

    grid-column: 2/12;
}
@media ${device.tablet} {

    grid-column: 2/12;
}
`;
const Paragraph = Styled.p`
    margin-bottom: 10px;
`;

const IconWrapper = Styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

`;

const SkillsIcons = Styled.img`
    height: 50px;
    margin-bottom: 40px;
    margin-right: 30px;

`;

const Skills = Styled.div`
grid-row: 6;
width: 100%;
grid-column: 1/13;
@media ${device.mobileL} {

    grid-row: 7;
    grid-column: 2/12;
}
@media ${device.tablet} {

    grid-row: 7;
    grid-column: 2/12;
}
`;

const About = () => {
  return (
    <Fragment>
      <Heading id="about" title="About" />
      <Content>
        <div>
          <Paragraph>
            I am a self-taught front-end developer/designer based in London. And{" "}
            
            <Typed
              loop
              style={{
                color: "#2634F2",
                fontWeight: "bold",
                marginBottom: 40
              }}
              typeSpeed={40}
              strings={[
                "a former ESL teacher",
                "a conference-goer",
                "a tech enthusiast and tinker"
              ]}
            />
          </Paragraph>
          <Paragraph>
            I pride myself on writing concise yet readable code, solving
            problems and always strive to create the highest quality user
            experience possible. I'm told I have a genuine eye for aesthetics
            and enjoy the creative process.
          </Paragraph>
          <Paragraph>
            Although I specialise in front-end development, my knowledge of
            back-end development allows me to work on a project with the full
            scope in mind simplifying the process of collaboration and producing
            a more cohesive experience for users.
          </Paragraph>
        </div>
      </Content>

      <Skills>
        <StaticQuery
          query={graphql`
            query MyQuery {
              allFile(
                filter: {
                  sourceInstanceName: { eq: "images" }
                  relativeDirectory: { eq: "skills" }
                }
              ) {
                edges {
                  node {
                    name
                    publicURL
                  }
                }
              }
            }
          `}
          render={({ allFile }) => {
            return (
              <Container>
                <IconWrapper>
                  {allFile.edges.map(({ node: image }) => (
                    <Tooltip title={image.name}>
                      <SkillsIcons
                        src={image.publicURL}
                        style={{
                          height: 40,
                          width: 80,
                          AlignItems: "center",
                          alignSelf: "center"
                        }}
                      />
                    </Tooltip>
                  ))}
                </IconWrapper>
              </Container>
            );
          }}
        />
      </Skills>
    </Fragment>
  );
};

export default About;
