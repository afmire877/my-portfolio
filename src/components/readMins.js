import React, { Fragment } from "react";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "theme-ui";
import Styled from "styled-components";

const readingTime = text => Math.ceil(text.split(/\s/g).length / 200);

export default ({ time }) => (
  <Container>
    <FontAwesomeIcon
      css={css`
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
