import React from "react";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styled from "styled-components";

export default ({ time }) => (
  <Container>
    <FontAwesomeIcon
      css={`
        color: #2634f2;
        margin-right: 10px;
        font-size: 13px;
      `}
      icon={faClock}
    />
    {time > 1 ? `${time} mins read` : `${time} min read`}
  </Container>
);

const Container = Styled.div`

`;
