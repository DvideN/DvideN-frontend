import styled from '@emotion/styled';
import IcCollateral from '@src/assets/IcCollateral.svg';
import IcTransaction from '@src/assets/IcTransaction.svg';
// import SnoopImage from '@src/assets/snoop.png';
import NftNameLabel from '@src/components/common/NftNameLabel';
import SmallButton from '@src/components/common/SmallButton';
import PendingCircle from '@src/components/Purchase/PendingCircle';
import UnlockNftModal from '@src/components/Purchase/UnlockNftModal';
import theme from '@src/styles/theme';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';

interface CardProps {
  name: string;
  monthlyPayment: string;
  installmentMonth: number;
  collateral: string;
  remainingMonth: number;
  status: 'pending' | 'done' | 'fail' | 'cancel';
  src: string;
}

function PendingInstallmentCard(props: CardProps) {
  const router = useRouter();
  const actionType = router.pathname.slice(1);

  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current && (inputRef.current as any).click();
  };

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
            Down payment: {props.collateral}
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
        {props.status == 'done' && actionType == 'purchase' && (
          <>
            <SmallButton width={'103px'} type={'rainbow'} onClick={handleClick}>
              <SmallButton.Label>Unlock NFT</SmallButton.Label>
            </SmallButton>
            <input
              type="checkbox"
              id="my-modal-6"
              className="modal-toggle bg-black"
              ref={inputRef}
            />
            <UnlockNftModal />
          </>
        )}
        {props.status == 'cancel' && actionType == 'sale' && (
          <SmallButton width={'99px'} type={'black'}>
            <SmallButton.Label>Retrieve NFT</SmallButton.Label>
          </SmallButton>
        )}
      </StLeftWrap>
      <StRightWrap>
        <PendingCircle
          src={props.src}
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
