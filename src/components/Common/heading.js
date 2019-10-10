import React from 'react';
// import './heading.css';
import Styled from 'styled-components';
import { device } from './desktop';

const Subheading = Styled.h1`
    &::after {
    content: "";
    background: #2634F2; 
    z-index: -1;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    transform: rotate(-2deg);
    }
    grid-column:  6/8;
    text-align:center;
    position: relative;
    font-style: italic;
    color: #ffff;
    font-size: 2rem;
    font-weight: 400;
    display: inline-block;
    word-break: break-word;
    white-space: normal;

    @media ${device.mobileL} {
        grid-column: 4/9;
    }


`;

const Heading = ({ title }) => {
    return (
        <Subheading>{title}</Subheading>
    )
}

export default Heading;