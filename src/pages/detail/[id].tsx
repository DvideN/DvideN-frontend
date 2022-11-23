import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
import RoundButton from '@src/components/common/RoundButton';
import { useRouter } from 'next/router';
import React from 'react';

function Detail() {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  return (
    <StRoot>
      <Header />
      <RoundButton width="82.7%" height="65px" disabled={true}>
        Purchase
      </RoundButton>
    </StRoot>
  );
}

export default Detail;

const StRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
