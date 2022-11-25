import styled from '@emotion/styled';
import IcCollateral from '@src/assets/IcCollateral.svg';
import IcTransaction from '@src/assets/IcTransaction.svg';
import NftNameLabel from '@src/components/common/NftNameLabel';
import SmallButton from '@src/components/common/SmallButton';
import theme from '@src/styles/theme';
import React from 'react';

interface CardProps {
  name: string;
  monthlyPayment: string;
  installmentMonth: number;
  collateral: string;
  remainingMonth: number;
}

function PendingInstallmentCard(props: CardProps) {
  console.log('IcCollateral', IcCollateral);
  console.log('IcTransaction', IcTransaction);

  return (
    <StWrap>
      <StLeftWrap>
        <StInfoWrap>
          <NftNameLabel fontSize={'18px'}>NoiaDuck #494</NftNameLabel>
          <StInfoLabel>
            Monthly Payment: {props.monthlyPayment}
            <br />
            Installment Months: {props.installmentMonth}
            <br />
            Collateral: {props.collateral}
          </StInfoLabel>
        </StInfoWrap>
        <StButtonWrap>
          <SmallButton>
            <SmallButton.Icon Icon={IcCollateral} />
            <SmallButton.Label>See Collateral</SmallButton.Label>
          </SmallButton>
          <SmallButton>
            <SmallButton.Icon Icon={IcTransaction} />
            <SmallButton.Label>See Transaction</SmallButton.Label>
          </SmallButton>
        </StButtonWrap>
      </StLeftWrap>
      <StRightWrap></StRightWrap>
    </StWrap>
  );
}

export default PendingInstallmentCard;

const StWrap = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 16px;
  padding: 20px;

  background-color: white;
  border-radius: 12px;

  width: 100%;
`;

const StLeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const StRightWrap = styled.div``;

const StInfoWrap = styled.div`
  display: grid;
  row-gap: 15px;
`;

const StButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;
`;

const StNameWrap = styled.div``;

const StInfoLabel = styled.p`
  font-size: 13px;
  line-height: 18px;

  color: ${theme.colors.gray500};
`;
