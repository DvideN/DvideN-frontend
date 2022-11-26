import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
import HomeTab from '@src/components/common/HomeTab';
import PendingInstallmentCard from '@src/components/Purchase/PendingInstallmentCard';
import theme from '@src/styles/theme';
import React from 'react';

function PurchaseTab() {
  const ticker = 'MATIC';

  return (
    <>
      <Header />
      <HomeTab />
      <StCardWrap>
        <PendingInstallmentCard
          name={'NoiaDuck #494'}
          monthlyPayment={`0.0102 ${ticker}`}
          installmentMonth={8}
          collateral={`0.0011 ${ticker}`}
          remainingMonth={2}
          status={'pending'}
        />
        <PendingInstallmentCard
          name={'NoiaDuck #494'}
          monthlyPayment={`0.0102 ${ticker}`}
          installmentMonth={8}
          collateral={`0.0011 ${ticker}`}
          remainingMonth={0}
          status={'done'}
        />
        <PendingInstallmentCard
          name={'NoiaDuck #494'}
          monthlyPayment={`0.0102 ${ticker}`}
          installmentMonth={8}
          collateral={`0.0011 ${ticker}`}
          remainingMonth={2}
          status={'cancel'}
        />
        <PendingInstallmentCard
          name={'NoiaDuck #494'}
          monthlyPayment={`0.0102 ${ticker}`}
          installmentMonth={8}
          collateral={`0.0011 ${ticker}`}
          remainingMonth={2}
          status={'fail'}
        />
      </StCardWrap>
    </>
  );
}

export default PurchaseTab;

const StCardWrap = styled.div`
  padding: 24px 13px;

  display: flex;
  flex-direction: column;
  row-gap: 24px;
  align-items: center;

  background-color: ${theme.colors.gray100};
`;
