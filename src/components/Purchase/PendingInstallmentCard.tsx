import styled from '@emotion/styled';
import IcCollateral from '@src/assets/IcCollateral.svg';
import IcTransaction from '@src/assets/IcTransaction.svg';
import SnoopImage from '@src/assets/snoop.png';
import NftNameLabel from '@src/components/common/NftNameLabel';
import SmallButton from '@src/components/common/SmallButton';
import PendingCircle from '@src/components/Purchase/PendingCircle';
import theme from '@src/styles/theme';
import React from 'react';

interface CardProps {
  name: string;
  monthlyPayment: string;
  installmentMonth: number;
  collateral: string;
  remainingMonth: number;
  status: 'pending' | 'done' | 'fail';
}

function PendingInstallmentCard(props: CardProps) {
  return (
    <StWrap>
      <StLeftWrap>
        <StInfoWrap>
          <NftNameLabel fontSize={'18px'}>NoiaDuck #494</NftNameLabel>
          <StInfoLabel>
            Monthly Payment: {props.monthlyPayment}
            <br />
            Installment Months: {props.installmentMonth} month
            <br />
            Collateral: {props.collateral}
          </StInfoLabel>
        </StInfoWrap>
        <StButtonWrap>
          <SmallButton width={'184px'}>
            <SmallButton.Icon Icon={IcCollateral} />
            <SmallButton.Label>See Money Streaming</SmallButton.Label>
          </SmallButton>
          <SmallButton width={'150px'}>
            <SmallButton.Icon Icon={IcTransaction} />
            <SmallButton.Label>See Transaction</SmallButton.Label>
          </SmallButton>
        </StButtonWrap>
        {props.status == 'done' && (
          <SmallButton width={'99px'} rainbow={true}>
            <SmallButton.Label>Unlock NFT</SmallButton.Label>
          </SmallButton>
        )}
      </StLeftWrap>
      <StRightWrap>
        <PendingCircle
          src={SnoopImage.src}
          totalMonth={props.installmentMonth}
          remainingMonth={props.remainingMonth}
          status={props.status}
        />
      </StRightWrap>
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
  align-items: flex-start;
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

const StInfoLabel = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;

  color: ${theme.colors.gray500};
`;
