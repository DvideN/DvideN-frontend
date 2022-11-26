import styled from '@emotion/styled';
import IcLimited from '@src/assets/IcLimited.svg';
import IcTransaction from '@src/assets/IcTransaction.svg';
import NftNameLabel from '@src/components/common/NftNameLabel';
import SmallButton from '@src/components/common/SmallButton';
import theme from '@src/styles/theme';
import React from 'react';

interface CardProps {
  name: string;
  mintingDate: string;
  src: string;
  status: 'done' | 'cancel';
}

interface RightWrapProps {
  src: string;
  status?: 'done' | 'cancel';
}

interface InfoLabelProps {
  status?: 'done' | 'cancel';
}

function MyNftCard({ name, mintingDate, src, status }: CardProps) {
  return (
    <StWrap>
      <StLeftWrap>
        <StInfoWrap>
          <NftNameLabel fontSize={'18px'}>{name}</NftNameLabel>
          {status == 'done' ? (
            <StInfoLabel>Minting Date: {mintingDate}</StInfoLabel>
          ) : (
            <StInfoLabel status={'cancel'}>Canceled</StInfoLabel>
          )}
        </StInfoWrap>
        <StButtonWrap>
          <SmallButton width={'184px'}>
            <SmallButton.Icon Icon={IcTransaction} />
            <SmallButton.Label>See Transaction</SmallButton.Label>
          </SmallButton>
        </StButtonWrap>
      </StLeftWrap>
      <StRightWrap src={src} status={status}>
        {status == 'cancel' && (
          <IcLimited className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
        )}
      </StRightWrap>
    </StWrap>
  );
}

export default MyNftCard;

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

const StRightWrap = styled.div<RightWrapProps>`
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  width: 98px;
  background: ${(props) =>
      props.status == 'cancel' && 'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),'}
    url(${(props) => props.src}) no-repeat;
  background-size: cover;
`;

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

const StInfoLabel = styled.p<InfoLabelProps>`
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;

  color: ${(props) => (props.status == 'cancel' ? theme.colors.red700 : theme.colors.gray500)};
`;
