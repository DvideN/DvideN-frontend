import snoopImg from '@src/assets/snoop.png';
import MyNftCard from '@src/components/MyNft/MyNftCard';
import { PURCHASE_MODAL } from '@src/constants/parchase';
import { getMyNft } from '@src/utils/getMyNft';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

import CommonError from '../common/CommonError';
import ErrorBoundary from '../common/ErrorBoundary';
import Loading from '../common/Loading';
import SSRSafeSuspense from '../common/SSRSafeSuspense';
function NftList() {
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

const Resolved = () => {
  const { data } = useQuery(['my_nft'], () => getMyNft(), {
    suspense: true,
  });

  return (
    <>
      {data.data.map((item: any) => (
        <MyNftCard
          key={item.tokenId}
          name={item.name}
          mintingDate={item.mintingDate}
          src={item.imageUrl}
          status={'done'}
        />
      ))}
    </>
  );
};

export default NftList;
