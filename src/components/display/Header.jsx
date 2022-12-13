import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return <HeaderStyle>My ToDos</HeaderStyle>;
}
export default Header;
