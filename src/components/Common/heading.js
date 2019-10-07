import React from 'react';
import Styled from 'styled-components';

const Subheading = Styled.h1`
    grid-column:  6/8;
    text-align:center;
`;

const Heading = ({ title }) => {
    return (
        <Subheading>{title}</Subheading>
    )
}

export default Heading;