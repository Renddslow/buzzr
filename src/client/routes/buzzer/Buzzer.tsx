import React from 'react';
import styled from 'styled-components';

import Button from './styled/Button';
import Score from './Score';
import BuzzerContainer from './styled/BuzzerContainer';
import Header from '../../components/Header';

const BuzzerBackground = styled.div`
  background: linear-gradient(#131c31, #f1597d 60%, #eec8b8 90%);
`;

const Buzzer = ({ param }) => {
  return (
    <BuzzerBackground>
      <BuzzerContainer>
        <Header code={param} />
        <Score name="Player 1">0</Score>
        <span />
        <Button>
          <span>Buzz In</span>
        </Button>
      </BuzzerContainer>
    </BuzzerBackground>
  );
};

export default Buzzer;
