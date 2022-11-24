import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import React from 'react';

interface DetailProps {
  month: string;
  collateral: string;
  percent: number;
}

function DetailInstallment({ month, collateral, percent }: DetailProps) {
  return (
    <StWrap>
      <StRowWrap>
        <StTitleLabel>Installment Month</StTitleLabel>
        <StContentLabel>{month}</StContentLabel>
      </StRowWrap>
      <StRowWrap>
        <StTitleLabel>Collateral</StTitleLabel>
        <StCollateralWrap>
          <StContentLabel>{collateral}</StContentLabel>
          <StPercentLabel>({percent}%)</StPercentLabel>
        </StCollateralWrap>
      </StRowWrap>
    </StWrap>
  );
}

export default DetailInstallment;

const StWrap = styled.div`
  width: 93.6%;
  background: ${theme.colors.gray100};
  border-radius: 12px;

  padding: 20px 14px;

  display: grid;
  row-gap: 22px;
`;

const StRowWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StTitleLabel = styled.p`
  font-size: 13px;
  color: ${theme.colors.gray500};
`;

const StContentLabel = styled.p`
  font-size: 16px;
  color: ${theme.colors.gray500};
`;

const StCollateralWrap = styled.div`
  display: flex;
  align-items: end;
`;

const StPercentLabel = styled.p`
  font-size: 12px;
  color: ${theme.colors.gray400};
`;
