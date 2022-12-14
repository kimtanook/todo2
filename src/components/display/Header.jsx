import React from 'react';
import styled, { keyframes } from 'styled-components';

const boxFade = keyframes`
  50% { // 50% -> 정해둔 초의 50%가 지났을 때 중괄호 안의 코드를 실행
    opacity: 50%; // 불투명도
  }
`;

const HeaderStyle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & {
    animation: ${boxFade} 1s step-end infinite; // ease-in-out infinite : 무한 alternate
  }
`;

function Header() {
  return <HeaderStyle>My ToDos</HeaderStyle>;
}
export default Header;
