import styled from '@emotion/styled';
import mainLogo from '@src/assets/mainLogo.gif';
import Image from 'next/image';
import React from 'react';
interface LoadingProps {
  isIcon?: boolean;
  width?: string;
  height?: string;
}

interface RootStyleProps {
  width: string;
  height: string;
}

function Loading({ isIcon = true, width = '150px', height = '150px' }: LoadingProps) {
  return (
    <StRoot width={width} height={height}>
      <svg
        width="158"
        height="158"
        viewBox="0 0 158 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin"
      >
        <circle cx="79" cy="79" r="75" stroke="#E8E9EA" strokeWidth="8" />
        <path
          d="M154 79C154 37.5786 120.421 4 79 4"
          stroke="#020204"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
      {isIcon && (
        <StImgWrapper>
          <Image src={mainLogo.src} alt="divideN logo" width={75} height={92} />
          {/* <LoadingIcon /> */}
        </StImgWrapper>
      )}
    </StRoot>
  );
}

export default Loading;

const StRoot = styled.div<RootStyleProps>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const StImgWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
