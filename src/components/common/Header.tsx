import styled from '@emotion/styled';
import logoImg from '@src/assets/logo.png';
import theme from '@src/styles/theme';
import React from 'react';
import { useAccount } from 'wagmi';

import ConnectWallet from './ConnectWallet';

interface StLogoBtnProps {
  src: string;
}

function Header() {
  return (
    <StWrap>
      <StLogoBtn src={logoImg.src} />
      <ConnectWallet />
    </StWrap>
  );
}

export default Header;

const StWrap = styled.div`
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
`;

const StLogoBtn = styled.button<StLogoBtnProps>`
  width: 44px;
  height: 55px;

  background: url(${(props) => props.src}) center no-repeat;
`;
