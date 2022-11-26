import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import Image from 'next/image';
import React from 'react';

interface CardProps {
  id: number;
  src: string;
  name: string;
  selected?: boolean;
}

interface StyleProps {
  selected: boolean;
}

function SimpleNftCard({ src, name, selected = false }: CardProps) {
  return (
    <StWrap>
      <StImageWrap selected={selected}>
        <Image
          src={src}
          alt={'nft'}
          layout="fill"
          objectFit="cover"
          blurDataURL={src}
          placeholder="blur"
        />
      </StImageWrap>
      <StNameLabel>{name}</StNameLabel>
    </StWrap>
  );
}

export default SimpleNftCard;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  width: 100%;
`;

const StImageWrap = styled.div<StyleProps>`
  width: 100%;
  height: 160px;
  overflow: hidden;
  position: relative;

  border: 4px solid transparent;
  border-radius: 16px;

  ${(props) => props.selected && `background: ${theme.colors.rainbow}`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: 2s rotate linear infinite;

  --angle: 0deg;

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
`;

const StNameLabel = styled.p`
  font-weight: 500;
  font-size: 14px;
  text-align: center;

  color: ${theme.colors.gray600};

  width: 100%;

  word-break: break-all;
  white-space: normal;
`;
