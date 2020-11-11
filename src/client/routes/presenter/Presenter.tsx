import React from 'react';
import styled from 'styled-components';

import Card from './styled/Card';
import Header from '../../components/Header';

const Background = styled.div`
  background: linear-gradient(#131c31, #f1597d 60%, #eec8b8 90%);
`;

const PresenterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  padding: 48px 56px;
  position: relative;
  z-index: 1;
  display: grid;
  grid-gap: 24px;
  grid-template-rows: repeat(2, minmax(0, max-content)) 1fr max-content;
  margin: 0 auto;
`;

const CardContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  left: 0;
  padding: 48px;
  display: grid;
  box-sizing: border-box;
  font-size: 32px;
  line-height: 1.5;
  font-weight: 600;
`;

const Presenter = ({ param }) => {
  return (
    <Background>
      <PresenterContainer>
        <Header code={param} />
        <Card>
          <CardContent>
            Widely considered one of the worst console video games ever made, and a cautionary tale
            for the industry as a whole, Howard Scott Warshaw had just five weeks to complete a
            version of Pac Man for the Atari 2600 in time for the Christmas season, 1982. Panned by
            critics and also a massive commercial failure, this game was so bad that in addition to
            millions of unsold units, Atari had to deal with thousands of cartridges returned
            directly to them by unsatisfied customers. Over 130,000 copies of this title, part of 20
            semi-truck loads of unsold games and equipment were eventually buried in an Alamogordo,
            New Mexico landfill.
          </CardContent>
        </Card>
      </PresenterContainer>
    </Background>
  );
};

export default Presenter;
