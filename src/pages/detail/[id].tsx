import styled from '@emotion/styled';
import snoopImage from '@src/assets/snoop.png';
import Header from '@src/components/common/Header';
import RoundButton from '@src/components/common/RoundButton';
import DetailInstallment from '@src/components/Detail/DetailInstallment';
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
        <StPriceWrap>
          <DetailPrice title="Total Price" price="0.1021 ETH" />
          <DetailPrice title="Installment Price" price="0.0121 ETH" duration="1 month" />
        </StPriceWrap>
        <DetailInstallment month="12 months" collateral="0.0011 ETH" percent={30} />
        <RoundButton width="82.7%" height="65px" styleType="rainbow">
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
  padding-bottom: 40px;
  width: 100%;
`;

const StPriceWrap = styled.div`
  display: grid;
  row-gap: 14px;

  width: 88.2%;
`;