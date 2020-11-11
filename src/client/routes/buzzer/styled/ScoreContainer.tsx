import styled from 'styled-components';

const ScoreContainer = styled.div`
  background: #f9f9f9;
  width: 100%;
  border-radius: 12px;
  height: 0;
  padding-bottom: 80%;
  position: relative;

  &::before {
    content: '';
    width: 90%;
    height: 100%;
    position: absolute;
    display: block;
    background: #fff;
    border-radius: 12px;
    bottom: -25px;
    opacity: 0.8;
    z-index: -2;
    left: 5%;
  }

  &::after {
    content: '';
    width: 80%;
    height: 100%;
    position: absolute;
    display: block;
    background: #fff;
    border-radius: 12px;
    bottom: -50px;
    opacity: 0.3;
    z-index: -3;
    left: 10%;
  }
`;

export default ScoreContainer;
