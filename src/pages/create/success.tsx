import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
import RoundButton from '@src/components/common/RoundButton';
import theme from '@src/styles/theme';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

function Success() {
  const confettiWrap = useRef(null);

  useEffect(() => {
    const currRef = confettiWrap.current;

    for (let i = 0; i < 80; i++) {
      generateConfetti(currRef);
    }
  }, []);

  const router = useRouter();
  const id = localStorage.getItem('id');
  const handleClick = () => {
    router.push(`/detail/${id}`);
  };

  return (
    <>
      <Header />
      <StWrap ref={confettiWrap}>
        <StSuccessLabel>
          Successfully
          <br />
          Uploaded!
        </StSuccessLabel>
        <RoundButton width={'208px'} height={'65px'} onClick={handleClick}>
          See Details
        </RoundButton>
      </StWrap>
    </>
  );
}

const generateConfetti = (wrap: Element | null) => {
  const randomRotation = Math.floor(Math.random() * 360);
  const randomScale = Math.random() * 2;
  const randomWidth = Math.floor(
    Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
  );
  const randomHeight = Math.floor(
    Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500),
  );
  const randomAnimationDelay = Math.floor(Math.random() * 15);

  const colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const confetti = document.createElement('div');

  confetti.className = 'confetti';
  confetti.style.top = randomHeight + 'px';
  confetti.style.right = randomWidth + 'px';
  confetti.style.backgroundColor = randomColor;
  confetti.style.setProperty('--opacity', String(randomScale));
  confetti.style.transform = 'skew(15deg) rotate(' + randomRotation + 'deg)';
  confetti.style.animationDelay = randomAnimationDelay + 's';

  wrap && wrap.appendChild(confetti);
};

export default Success;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  overflow: hidden !important;

  --opacity: 1;

  @keyframes confettiRain {
    0% {
      opacity: var(--opacity);
      margin-top: -100vh;
      margin-left: -200px;
    }

    100% {
      opacity: var(--opacity);
      margin-top: 100vh;
      margin-left: 200px;
    }
  }

  .confetti {
    opacity: 0;
    position: absolute;
    width: 1rem;
    height: 1.5rem;
    transition: 500ms ease;
    animation: confettiRain 5s infinite;
  }

  @property --opacity {
    syntax: '<opacity>';
    initial-value: 1;
    inherits: false;
  }
`;

const StSuccessLabel = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
  text-align: center;

  color: ${theme.colors.gray900};

  margin-top: 20vh;
  margin-bottom: 40px;
`;
