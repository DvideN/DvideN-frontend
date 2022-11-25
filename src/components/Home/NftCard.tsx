import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import React from 'react';

interface CardProps {
  imgSrc: string;
  name: string;
  price: string;
}

interface StyleProps {
  src: string;
}

function NftCard({ imgSrc, name, price }: CardProps) {
  return (
    <StWrap src={imgSrc}>
      <StNameLabel>{name}</StNameLabel>
      <StPriceLabel>{price}</StPriceLabel>
    </StWrap>
  );
}

export default NftCard;

const StWrap = styled.div<StyleProps>`
  width: 100%;
  aspect-ratio: 349/363;

  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 40.58%,
      rgba(0, 0, 0, 0.7) 70.79%
    ),
    url(${(props) => props.src}) no-repeat;
  background-size: 100%;

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 28px;
`;

const StNameLabel = styled.p`
  font-size: 24px;
  color: white;
`;

const StPriceLabel = styled.p`
  font-size: 15px;
  color: ${theme.colors.gray300};

  margin-top: 10px;
`;
