import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
import HomeTab from '@src/components/common/HomeTab';
import RoundButton from '@src/components/common/RoundButton';
import PendingInstallmentCard from '@src/components/Purchase/PendingInstallmentCard';
import theme from '@src/styles/theme';
import React from 'react';

function SaleTab() {
  return (
    <>
      <Header />
      <HomeTab />
      <StUploadWrap>
        <RoundButton width={'165px'} height={'57px'}>
          Upload
        </RoundButton>
      </StUploadWrap>
      <StCardWrap>
        <PendingInstallmentCard
          name={'NoiaDuck #494'}
          monthlyPayment={'0.0102 ETH'}
          installmentMonth={8}
          collateral={'0.0011 ETH'}
          remainingMonth={2}
          status={'pending'}
        />
        <PendingInstallmentCard
          name={'NoiaDuck #494'}
          monthlyPayment={'0.0102 ETH'}
          installmentMonth={8}
          collateral={'0.0011 ETH'}
          remainingMonth={2}
          status={'pending'}
        />
      </StCardWrap>
    </>
  );
}

export default SaleTab;

const StUploadWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 113px;
`;

const StCardWrap = styled.div`
  padding: 24px 13px;

  display: flex;
  flex-direction: column;
  row-gap: 24px;
  align-items: center;

  background-color: ${theme.colors.gray100};
`;
