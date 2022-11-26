import styled from '@emotion/styled';
import mainLogo from '@src/assets/mainLogo.gif';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
const ConnectWallet = dynamic(() => import('@src/components/common/ConnectWallet'), {
  ssr: false,
});

interface StLogoBtnProps {
  src: string;
}

function Header() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <StWrap>
      <StLogoBtn src={mainLogo.src} onClick={handleClick} />
      <ConnectWallet />
    </StWrap>
  );
}

export default Header;

const StWrap = styled.div`
  width: 100%;
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
`;

const StLogoBtn = styled.button<StLogoBtnProps>`
  width: 44px;
  height: 55px;

  background: url(${(props) => props.src}) center / cover no-repeat;
`;
