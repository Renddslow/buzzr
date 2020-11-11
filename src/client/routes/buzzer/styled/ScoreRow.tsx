import styled from 'styled-components';

const Row = styled.div`
  display: grid;
  width: max-content;
  grid-template-columns: repeat(2, minmax(0, max-content));
  position: absolute;
  left: 24px;
  top: 24px;
  align-items: center;
  grid-gap: 12px;
`;

export default Row;
