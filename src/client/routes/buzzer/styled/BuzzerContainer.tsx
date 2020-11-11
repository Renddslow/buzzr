import styled from 'styled-components';

const BuzzerContainer = styled.div`
  width: 100%;
  max-width: 411px;
  height: 100vh;
  overflow: hidden;
  padding: 24px 24px 48px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: repeat(2, minmax(0, max-content)) 1fr minmax(0, max-content);
  justify-content: center;
  grid-auto-columns: minmax(0, 1fr);
  position: relative;
  z-index: 1;
  grid-gap: 24px;
  margin: 0 auto;
`;

export default BuzzerContainer;
