import React, { Fragment } from "react";
import Heading from "../Common/heading";
import Styled from "styled-components";
import { device } from "../Common/desktop";

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

const About = () => {
  return (
    <Fragment>
      <Heading id="about" title="About" />
      <Content>
        <div>
          <Paragraph>
            I am a <strong>web developer/designer</strong> based in London.
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
    </Fragment>
  );
};

export default About;
