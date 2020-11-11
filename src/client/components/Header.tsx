import React from 'react';
import styled from 'styled-components';

const Logo = styled.strong`
  color: #fff;
  font-style: italic;
`;

const Code = styled.div`
  width: max-content;
  background: #f8f8f8cc;
  padding: 4px 8px;
  border-radius: 25px;
  font-size: 12px;
`;

const Header = styled.header`
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-auto-flow: column;
`;

const HeaderComponent = ({ code }) => (
  <Header>
    <Logo>Buzzr</Logo>
    <Code>
      <strong>Game #</strong> {code}
    </Code>
  </Header>
);

export default HeaderComponent;
