import React, {Fragment} from 'react';
import Heading from '../Common/heading'
import Styled from  'styled-components';
import image from '../../../static/undraw.svg';




const Content  = Styled.div`
 grid-row: 5;
 grid-column: 2/6;
 align-items: center;
 display: flex;
`

const Image = Styled.img`
 grid-row: 5;
 width: 100%;
 grid-column: 7/12;
`

const About = () => {
    return (
        <Fragment>
        <Heading title="About"/>

        <Content>
        <p>
         I am a Freelance Front end developer/designer based in london. I am a former ESL teacher for 2 years. 
           <br/>
        I have always been a tech enthusiest, worte my first lines on code in c++ when I got my first laptop.  But unfortunately abandound it for teaching (for a while anyway), after descovering JavaScript. 
        </p>

        </Content>
         <Image src={image} />
         <Content>
             <p>TECH:</p>
         </Content>
        </Fragment>
    )
}

export default About;