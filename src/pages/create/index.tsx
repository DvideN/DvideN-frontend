import styled from '@emotion/styled';
import snoopImg from '@src/assets/snoop.png';
import Header from '@src/components/common/Header';
import RoundButton from '@src/components/common/RoundButton';
import SimpleNftCard from '@src/components/Create/SimpleNftCard';
import React from 'react';

function CreateSelect() {
  return (
    <>
      <Header />
      <StWrap>
        <StTitleLabel>Select NFT</StTitleLabel>
        <StNftGrid>
          <SimpleNftCard id={3} src={snoopImg.src} name={'NoiaDuck #494'} />
          <SimpleNftCard id={9} src={snoopImg.src} name={'NoiaDuckNoiaDuckNoiaDuckNoiaDuck #494'} />
          <SimpleNftCard id={5} src={snoopImg.src} name={'NoiaDuck #494'} selected={true} />
          <SimpleNftCard id={1} src={snoopImg.src} name={'NoiaDuck #494'} />
        </StNftGrid>
        <RoundButton width={'327px'} height={'65px'}>
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
