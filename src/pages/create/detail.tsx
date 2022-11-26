import styled from '@emotion/styled';
import snoopImage from '@src/assets/snoop.png';
import Header from '@src/components/common/Header';
import CreateDetailInput from '@src/components/Create/CreateDetailInput';
import theme from '@src/styles/theme';
import Image from 'next/image';
import React from 'react';

interface DetailProps {
  src: string;
  name: string;
}

function CreateDetail({ src, name }: DetailProps) {
  return (
    <>
      <Header />
      <StWrap>
        <StTitleLabel>Enter Details</StTitleLabel>
        <StImageWrap>
          <Image src={snoopImage} alt={'nft'} layout={'fill'} objectFit={'cover'} />
        </StImageWrap>
        <StNameLabel>{'NoiaDuck #494'}</StNameLabel>
        <StInputWrap>
          <CreateDetailInput title={'Price'} unit={'MATIC'} />
          <CreateDetailInput title={'Down payment Rate'} unit={'%'} />
          <CreateDetailInput title={'Max Installment Month'} unit={'Month'} />
        </StInputWrap>
      </StWrap>
    </>
  );
}

export default CreateDetail;

const StWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StTitleLabel = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;

  color: ${theme.colors.gray900};

  margin: 48px 0;
`;

const StImageWrap = styled.div`
  width: 89.3%;
  aspect-ratio: 335 / 348;
  position: relative;

  border-radius: 8px;
  overflow: hidden;
`;

const StNameLabel = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;

  color: ${theme.colors.gray600};

  margin-top: 16px;
`;

const StInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;

  width: 85%;
  margin: 40px 28px;
`;
