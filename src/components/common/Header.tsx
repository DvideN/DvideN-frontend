import styled from '@emotion/styled';
import logoImg from '@src/assets/ddd 3.png';
import { connectMetamask } from '@src/utils/connectWallet';
import React from 'react';

function Header() {
  const walletAddress = '0xd...024';

  const handleWalletClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (e.currentTarget.id) {
      case 'metamask':
        console.log(await connectMetamask());
        break;
      default:
        break;
    }
  };

  return (
    <StWrap>
      <StLogoBtn bgImg={logoImg.src} />
      <StMetamaskBtn onClick={handleWalletClick} type="button" id="metamask">
        {walletAddress}
      </StMetamaskBtn>
    </StWrap>
  );
}

export default Header;

const StWrap = styled.div`
  width: 100vw;
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
`;

interface StLogoBtnProps {
  bgImg: string;
}

const StLogoBtn = styled.button<StLogoBtnProps>`
  width: 44px;
  height: 55px;

  background: url(${(props) => props.bgImg}) center no-repeat;
`;

const StMetamaskBtn = styled.button`
  padding: 6px 16px;

  width: 92px;
  height: 34px;

  background: #e8e9ea;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
`;
