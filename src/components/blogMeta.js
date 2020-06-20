import React from 'react';
import Styled from 'styled-components';
import ReadMins from '../components/readMins';

export default ({ date, timeToRead }) => {
  return (
    <Meta>
      Published on {date} <ReadMins time={timeToRead} />
    </Meta>
  );
};

const Meta = Styled.div`
  font-size: 13px;
  grid-column: 1/9;
  color: black;
  display: flex;
  justify-content: space-evenly;
`;
