import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
import HomeTab from '@src/components/common/HomeTab';
import BalanceSummaryCard from '@src/components/MyNft/BalanceSummaryCard';
import NftList from '@src/components/MyNft/NftList';
import theme from '@src/styles/theme';
import React from 'react';

function MyNftTab() {
  return (
    <>
      <Header />
      <HomeTab />
      <StCardWrap>
        <BalanceSummaryCard costUnit={'MATIC'} succeededCost={175} canceledCost={125} />
        <NftList />
      </StCardWrap>
    </>
  );
}

export default MyNftTab;

const StCardWrap = styled.div`
  padding: 24px 13px;

  display: flex;
  flex-direction: column;
  row-gap: 24px;
  align-items: center;
  min-height: calc(100vh - 110px);
  background-color: ${theme.colors.gray100};
`;
