import styled from '@emotion/styled';
import Info from '@src/assets/Info.svg';
import MaticLogo from '@src/assets/polygon-logo-27.svg';
import theme from '@src/styles/theme';
import React from 'react';

interface TotalPriceProps {
  price?: number;
  isSufficient?: boolean;
}

const totalPrice = 'Total Price';
const ticker = 'MATIC';
const insufficientMessage = 'Insufficient balance';

function TotalPrice({ price, isSufficient = true }: TotalPriceProps) {
  return (
    <StRoot>
      <StLabel>{totalPrice}</StLabel>
      <StContents>
        <MaticLogo />
        <StText>{`${price} ${ticker}`}</StText>
      </StContents>
      {!isSufficient && (
        <StNoticeLabel>
          <Info />
          <p>{insufficientMessage}</p>
        </StNoticeLabel>
      )}
    </StRoot>
  );
}

export default TotalPrice;

const StRoot = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 33px;
  position: relative;
`;
const StLabel = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;

  text-align: right;

  color: ${theme.colors.gray500};

  opacity: 0.9;
`;
const StContents = styled.div`
  display: flex;
  margin-top: 7px;
  align-items: center;
  /* margin-bottom: 32px; */
`;
const StText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  margin-left: 6px;

  color: ${theme.colors.gray900};
`;

const StNoticeLabel = styled.label`
  /* position: absolute; */
  display: flex;
  margin-top: 7px;

  & p {
    display: flex;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    top: 64px;
    color: #fb4e50;
    margin-left: 5.5px;
  }
`;
