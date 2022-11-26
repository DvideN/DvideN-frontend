import snoopImg from '@src/assets/snoop.png';
import MyNftCard from '@src/components/MyNft/MyNftCard';
import { PURCHASE_MODAL } from '@src/constants/parchase';
import { getMyNft } from '@src/utils/getMyNft';
import { getSaleNft } from '@src/utils/getSaleNft';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

import CommonError from '../common/CommonError';
import ErrorBoundary from '../common/ErrorBoundary';
import Loading from '../common/Loading';
import SSRSafeSuspense from '../common/SSRSafeSuspense';
import PendingInstallmentCard from './PendingInstallmentCard';
function SaleNftList() {
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
  const { data } = useQuery(['sale_nft'], () => getSaleNft(), {
    suspense: true,
  });

  return (
    <>
      {data.data.map((item: any) => (
        <PendingInstallmentCard
          key={item.tokenId}
          name={item.name}
          monthlyPayment={item.monthlyPayment}
          installmentMonth={item.installmentMonth}
          remainingMonth={item.remainingMonth}
          collateral={item.collateral}
          src={item.imageUrl}
          status={item.tokenId === 117 ? 'cancel' : 'pending'}
        />
      ))}
    </>
  );
};

export default SaleNftList;
