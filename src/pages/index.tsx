import styled from '@emotion/styled';
import snoopImg from '@src/assets/snoop.png';
import Header from '@src/components/common/Header';
import HomeTab from '@src/components/Home/HomeTab';
import NftCard from '@src/components/Home/NftCard';
import PendingInstallmentCard from '@src/components/Home/PendingInstallmentCard';
import theme from '@src/styles/theme';
import type { NextPage } from 'next';
import Head from 'next/head';

const Feed: NextPage = () => {
  return (
    <>
      <Head>
        <title>DvideN</title>
        <meta name="description" content="DvideN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeTab />
      <StCardWrap>
        <PendingInstallmentCard
          name={'NoiaDuck #494'}
          monthlyPayment={'0.0102 ETH'}
          installmentMonth={8}
          collateral={'0.0011 ETH'}
          remainingMonth={2}
        />
        <NftCard id={0} imgSrc={snoopImg.src} name="NoiaDuck #494" price="0.1021 ETH" />
        <NftCard id={0} imgSrc={snoopImg.src} name="NoiaDuck #494" price="0.1021 ETH" />
        <StComingSoonLabel>Coming soon :)</StComingSoonLabel>
      </StCardWrap>
    </>
  );
};

export default Feed;

const StCardWrap = styled.div`
  padding: 24px 13px;

  display: flex;
  flex-direction: column;
  row-gap: 24px;
  align-items: center;

  background-color: ${theme.colors.gray100};
`;

const StComingSoonLabel = styled.p`
  font-size: 16px;
  color: ${theme.colors.gray450};

  margin: 70px 0;
`;
