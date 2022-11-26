import styled from '@emotion/styled';
import snoopImg from '@src/assets/snoop.png';
import Header from '@src/components/common/Header';
import RoundButton from '@src/components/common/RoundButton';
import CreateCardList from '@src/components/Create/CreateCardList';
import SimpleNftCard from '@src/components/Create/SimpleNftCard';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function CreateSelect() {
  const router = useRouter();
  const [routingId, setRoutingId] = useState('');
  const handleClick = () => {
    router.push(`create/${routingId}`);
  };

  return (
    <>
      <Header />
      <StWrap>
        <StTitleLabel>Select NFT</StTitleLabel>
        <StNftGrid>
          <CreateCardList setRoutingId={setRoutingId} />
        </StNftGrid>
        <RoundButton width={'327px'} height={'65px'} onClick={handleClick}>
          Next
        </RoundButton>
      </StWrap>
    </>
  );
}

export default CreateSelect;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StTitleLabel = styled.p`
  font-weight: 700;
  font-size: 28px;

  margin: 48px 0;
`;

const StNftGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 160px 160px;

  margin-bottom: 80px;
`;
