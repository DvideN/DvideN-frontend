import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import React from 'react';

interface CardProps {
  costUnit: string;
  succeededCost: number;
  canceledCost: number;
}

interface StyleProps {
  bold?: boolean;
}

function BalanceSummaryCard({ costUnit, succeededCost, canceledCost }: CardProps) {
  return (
    <StWrap>
      <StRowWrap>
        <StTitleLabel>Succeeded Tx cost</StTitleLabel>
        <StAmountLabel>
          +{succeededCost} {costUnit}
        </StAmountLabel>
      </StRowWrap>
      <StRowWrap>
        <StTitleLabel>Canceled Tx cost</StTitleLabel>
        <StAmountLabel>
          -{canceledCost} {costUnit}
        </StAmountLabel>
      </StRowWrap>
      <StRowWrap>
        <StTitleLabel>Total</StTitleLabel>
        <StAmountLabel bold={true}>
          {succeededCost - canceledCost >= 0 && '+'} {succeededCost - canceledCost} {costUnit}
        </StAmountLabel>
      </StRowWrap>
    </StWrap>
  );
}

export default BalanceSummaryCard;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 20px;
  gap: 8px;

  width: 100%;

  background-color: white;
  border-radius: 12px;
`;

const StRowWrap = styled.div`
  font-weight: 700;
  font-size: 13px;

  color: ${theme.colors.gray450};

  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const StTitleLabel = styled.div`
  font-weight: 700;
  font-size: 13px;

  color: ${theme.colors.gray500};
`;

const StAmountLabel = styled.div<StyleProps>`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  color: ${(props) => (props.bold ? `${theme.colors.gray900}` : `${theme.colors.gray500}`)};
`;
