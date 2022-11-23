import styled from '@emotion/styled';
import { connectMetamask } from '@src/utils/connectWallet';
import type { NextPage } from 'next';
import Head from 'next/head';

const Feed: NextPage = () => {
  const handleWalletClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (e.currentTarget.id) {
      case 'metamask':
        console.log(await connectMetamask());
        break;
      default:
        break;
    }
  };

  return (
    <StPage>
      <Head>
        <title>DvideN</title>
        <meta name="description" content="DvideN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello world!</h1>
      <button onClick={handleWalletClick} type="button" id="metamask">
        Connect Metamask Wallet
      </button>
    </StPage>
  );
};

export default Feed;

const StPage = styled.div`
  width: 100vw;
  & > * {
    width: 100%;
  }
`;
