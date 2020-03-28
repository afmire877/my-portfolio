import React, { Fragment } from "react";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styled from "styled-components";

export default ({ time }) => (
  <Container>
    <FontAwesomeIcon
      css={`
        color: #2634f2;
        margin-right: 10px;
      `}
      icon={faClock}
      size={30}
    />
    {time > 1 ? `${time} mins read` : `${time} min read`}
  </Container>
);

const Container = Styled.div`

`;
