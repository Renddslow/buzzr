import React from 'react';

import ScoreContainer from './styled/ScoreContainer';
import Row from './styled/ScoreRow';
import Value from './styled/Value';
import Label from './styled/Label';

const Score = (props) => (
  <ScoreContainer>
    <Row>
      <Label>{props.name}</Label>
      <strong>Score</strong>
    </Row>
    <Value>{props.children}</Value>
  </ScoreContainer>
);

export default Score;
