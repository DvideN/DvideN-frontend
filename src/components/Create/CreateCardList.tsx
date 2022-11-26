import snoopImg from '@src/assets/snoop.png';
import MyNftCard from '@src/components/MyNft/MyNftCard';
import { PURCHASE_MODAL } from '@src/constants/parchase';
import { getMyNft } from '@src/utils/getMyNft';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import CommonError from '../common/CommonError';
import ErrorBoundary from '../common/ErrorBoundary';
import Loading from '../common/Loading';
import SSRSafeSuspense from '../common/SSRSafeSuspense';
import SimpleNftCard from './SimpleNftCard';

interface CreateCardListProps {
  setRoutingId: React.Dispatch<React.SetStateAction<string>>;
}
function CreateCardList({ setRoutingId }: CreateCardListProps) {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      <SSRSafeSuspense
        fallback={
          <div className="w-[100%] ml-[50%]">
            <Loading isIcon={true} />
          </div>
        }
      >
        <Resolved setRoutingId={setRoutingId} />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
}

const Resolved = ({ setRoutingId }: CreateCardListProps) => {
  const { data } = useQuery(['my_nft'], () => getMyNft(), {
    suspense: true,
  });
  const [currentId, setCurrentId] = useState(data.data[0].tokenId);

  const handleClick = (e: any) => {
    setCurrentId(e.currentTarget.id);
    setRoutingId(e.currentTarget.id);
  };

  return (
    <>
      {data.data.map((item: any) => (
        <SimpleNftCard
          key={item.tokenId}
          name={item.name}
          id={item.tokenId}
          src={item.imageUrl}
          onClick={handleClick}
          selected={currentId === item.tokenId.toString()}
        />
      ))}
    </>
  );
};

export default CreateCardList;
