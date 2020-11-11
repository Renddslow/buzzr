import styled from 'styled-components';

const Button = styled.button`
  width: 85%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  background: #2f3346;
  border: 0;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 50px;
  color: #fff;
  transition: transform 0.05s ease-out;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
  outline: none;

  &:active {
    transform: scale(0.99);
  }
`;

export default Button;
