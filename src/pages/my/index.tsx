import styled from '@emotion/styled';
import snoopImg from '@src/assets/snoop.png';
import Header from '@src/components/common/Header';
import HomeTab from '@src/components/common/HomeTab';
import BalanceSummaryCard from '@src/components/MyNft/BalanceSummaryCard';
import MyNftCard from '@src/components/MyNft/MyNftCard';
import theme from '@src/styles/theme';
import React from 'react';

function MyNftTab() {
  return (
    <>
      <Header />
      <HomeTab />
      <StCardWrap>
        <BalanceSummaryCard costUnit={'ETH'} succeededCost={175} canceledCost={125} />
        <MyNftCard
          name={'NoiaDuck #494'}
          mintingDate={'08/05/2022'}
          src={snoopImg.src}
          status={'done'}
        />
        <MyNftCard
          name={'NoiaDuck #494'}
          mintingDate={'08/05/2022'}
          src={snoopImg.src}
          status={'cancel'}
        />
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

  background-color: ${theme.colors.gray100};
`;
