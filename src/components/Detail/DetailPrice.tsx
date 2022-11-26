import styled from '@emotion/styled';
import MaticIcon from '@src/assets/polygon-logo-22.svg';
import theme from '@src/styles/theme';
import Image from 'next/image';
import React from 'react';

interface DetailProps {
  title: string;
  price: string;
  duration?: string;
}

function DetailPrice({ title, price, duration }: DetailProps) {
  return (
    <StWrap>
      <StTitleLabel>{title}</StTitleLabel>
      <StPriceWrap>
        <MaticIcon />
        <StPriceLabel>{price}</StPriceLabel>
        {duration && <StDurationLabel>/ {duration}</StDurationLabel>}
      </StPriceWrap>
    </StWrap>
  );
}

export default DetailPrice;

const StWrap = styled.div`
  display: grid;
  row-gap: 4px;
`;

const StTitleLabel = styled.p`
  font-weight: 700;
  font-size: 13px;

  color: ${theme.colors.gray400};
  opacity: 0.9;
`;

const StPriceWrap = styled.div`
  display: flex;
  align-items: end;
`;

const StPriceLabel = styled.p`
  font-weight: 700;
  font-size: 20px;

  color: ${theme.colors.gray800};

  margin-left: 8px;
`;

const StDurationLabel = styled.p`
  font-weight: 700;
  font-size: 13px;

  color: ${theme.colors.gray450};

  margin-left: 4px;
`;
