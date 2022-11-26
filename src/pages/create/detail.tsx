import styled from '@emotion/styled';
import snoopImage from '@src/assets/snoop.png';
import Header from '@src/components/common/Header';
import SlideButton from '@src/components/common/SlideButton';
import CreateDetailInput from '@src/components/Create/CreateDetailInput';
import theme from '@src/styles/theme';
import Image from 'next/image';
import React, { useState } from 'react';

interface DetailProps {
  src: string;
  name: string;
}

function CreateDetail({ src, name }: DetailProps) {
  const [price, setPrice] = useState('');
  const [downPaymentRate, setDownPaymentRate] = useState('');
  const [installmentMonth, setInstallmentMonth] = useState('');

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
          <CreateDetailInput title={'Price'} unit={'MATIC'} value={price} setValue={setPrice} />
          <CreateDetailInput
            title={'Down payment Rate'}
            unit={'%'}
            value={downPaymentRate}
            setValue={setDownPaymentRate}
          />
          <CreateDetailInput
            title={'Max Installment Month'}
            unit={'Month'}
            value={installmentMonth}
            setValue={setInstallmentMonth}
          />
        </StInputWrap>
        <SlideButton
          onSlideDone={() => {
            console.log('success');
          }}
          mainText={'Confirm Upload'}
          isAble={price != '' && downPaymentRate != '' && installmentMonth != ''}
        />
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

  margin-bottom: 30px;
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
