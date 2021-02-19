import React from 'react';
import styled, { css } from 'styled-components';

const StyledWrap = styled.div`
  width: 100vw;
  height: 100%;
  height: ${({ theme }) => css`
    background: ${theme.primaryColors.dkGreyBg};
  `};
`;

const MainContainer: React.FC = () => {
  return <StyledWrap>Hello world!</StyledWrap>;
};

export default MainContainer;
