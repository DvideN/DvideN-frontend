import styled from '@emotion/styled';
import snoopImage from '@src/assets/snoop.png';
import Header from '@src/components/common/Header';
import Notice from '@src/components/Purchase/Notice';
import PurchaseForm from '@src/components/Purchase/PurchaseForm';
// import SlideButton from '@src/components/common/SlideButton';
import PurchaseModal from '@src/components/Purchase/PurchaseModal';
import TotalPrice from '@src/components/Purchase/TotalPrice';
import theme from '@src/styles/theme';
import { getSliceAddress } from '@src/utils/string';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const SlideButton = dynamic(() => import('@src/components/common/SlideButton'), {
  ssr: false,
});

// router query -> maxMonth, InstallmentPrice, downPayment
function Purchase() {
  const maxMonth = 12;
  const installmentPrice = 0.0102;
  const downPayment = 0.1021;
  const [reset, setReset] = useState(false);
  const [isAbled, setIsAbled] = useState(true);
  const [installmentMonth, setInstallmentMonth] = useState(1);
  const handleSlideSuccess = () => {
    inputRef.current && (inputRef.current as any).click();
    setReset((prev) => !prev);
  };

  const addresss = '0xA0DDd71bbd9e807AbB52ceeD0EBc5426957Db2fc';

  const inputRef = useRef(null);

  return (
    <>
      <Header />
      <StMain>
        <StTitle>Purchasing</StTitle>

        <StImageWrapper>
          <Image
            src={snoopImage.src}
            alt="nft"
            blurDataURL={snoopImage.src}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
          />
        </StImageWrapper>
        <StSubTitle>NoiaDuck #494</StSubTitle>
        <StDescription>{getSliceAddress(3, addresss)}</StDescription>
        <Notice />
        <PurchaseForm
          installmentMonth={installmentMonth}
          setInstallmentMonth={setInstallmentMonth}
          maxMonth={maxMonth}
          installmentPrice={installmentPrice}
          downPayment={downPayment}
        />
        <TotalPrice price={0.1021} isSufficient={isAbled} />
        <input type="checkbox" id="my-modal-6" className="modal-toggle bg-black" ref={inputRef} />
        <PurchaseModal setReset={setReset} />
        <SlideButton
          onSlideDone={handleSlideSuccess}
          mainText="Confirm Purchase"
          reset={reset}
          isAbled={isAbled && installmentMonth - 1 < maxMonth}
        />
      </StMain>
    </>
  );
}

export default Purchase;

const StMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-bottom: 30px;
`;

const StTitle = styled.h1`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
  margin-bottom: 32px;
  width: 90%;

  color: ${theme.colors.gray900};
  margin-top: 30px;
`;

const StImageWrapper = styled.div`
  width: 90%;
  min-height: 348px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  /* object-fit: cover; */
`;

const StSubTitle = styled.h2`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: ${theme.colors.gray900};
  width: 90%;
  margin-top: 32px;
`;

const StDescription = styled.h3`
  margin-top: 4px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  width: 90%;

  color: ${theme.colors.gray400};
  margin-bottom: 28px;
`;
