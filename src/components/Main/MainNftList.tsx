import snoopImg from '@src/assets/snoop.png';
import MyNftCard from '@src/components/MyNft/MyNftCard';
import { PURCHASE_MODAL } from '@src/constants/parchase';
import { getAllNft, getMyNft } from '@src/utils/getMyNft';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

import CommonError from '../common/CommonError';
import ErrorBoundary from '../common/ErrorBoundary';
import Loading from '../common/Loading';
import SSRSafeSuspense from '../common/SSRSafeSuspense';
import NftCard from '../Explore/NftCard';
function MainNftList() {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      <SSRSafeSuspense
        fallback={
          <>
            <Loading isIcon={true} />
          </>
        }
      >
        <Resolved />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
}
const ticker = 'Matic';

const Resolved = () => {
  const { data } = useQuery(['all_nft'], () => getAllNft(), {
    suspense: true,
  });

  return (
    <>
      {data.data.map((item: any) => (
        <NftCard id={0} imgSrc={item.imageUrl} name={item.name} price={`${item.monthlyPayment}`} />
      ))}
    </>
  );
};

export default MainNftList;
