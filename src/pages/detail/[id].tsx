import styled from '@emotion/styled';
import snoopImage from '@src/assets/snoop.png';
import Header from '@src/components/common/Header';
import RoundButton from '@src/components/common/RoundButton';
import DetailName from '@src/components/Detail/DetailName';
import DetailPrice from '@src/components/Detail/DetailPrice';
import theme from '@src/styles/theme';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

function Detail() {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  return (
    <>
      <Header />
      <StRoot>
        <div style={{ width: '100%', height: '483px', position: 'relative' }}>
          <Image src={snoopImage} layout="fill" objectFit="cover" />
        </div>
        <DetailName name="NoiaDuck #494" account="0x123...456" />
        <StInfoWrap>
          <StPriceWrap>
            <DetailPrice title="Total Price" price="0.1021 ETH" />
            <DetailPrice title="Installment Price" price="0.0121 ETH" duration="1 month" />
          </StPriceWrap>
          <StInstallmentWrap></StInstallmentWrap>
        </StInfoWrap>
      </StRoot>
      <StRoot>
        <RoundButton width="82.7%" height="65px" disabled={true}>
          Purchase
        </RoundButton>
      </StRoot>
    </>
  );
}

export default Detail;

const StRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 28px;

  margin-top: 12px;
  width: 100%;
`;

const StInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const StPriceWrap = styled.div`
  display: grid;
  row-gap: 14px;

  width: 88.2%;
`;

const StInstallmentWrap = styled.div``;
