import React, {Fragment} from 'react';
import Heading from '../Common/heading'
import Styled from  'styled-components';
import image from '../../../static/undraw.svg';
import { device } from '../Common/desktop'



const Content  = Styled.div`
 grid-row: 5;
 grid-column: 2/6;
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
`
const Break = Styled.br`
    margin-bottom: 10px;
`;


const Image = Styled.img`
 grid-row: 5;
 width: 100%;
 grid-column: 7/12;
 @media ${device.mobileL} {

    grid-row: 6;
    grid-column: 2/12;
 }
 @media ${device.tablet} {

    grid-row: 6;
    grid-column: 2/12;
}
`

const About = () => {
    return (
        <Fragment>
            <Heading title="About"/>

            <Content>
            <p>
            I am a freelance front end developer/designer based in london. I am a former ESL teacher for 2 years. 
            <Break />
            I have always been a tech enthusiest, worte my first lines on code in c++ when I got my first laptop.  But unfortunately abandound it for teaching (for a while anyway), after descovering JavaScript. 
            </p>

            </Content>
            <Image src={image} />
        </Fragment>
    )
}

export default About;