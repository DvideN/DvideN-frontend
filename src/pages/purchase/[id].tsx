import styled from '@emotion/styled';
import snoopImage from '@src/assets/snoop.png';
import Header from '@src/components/common/Header';
// import SlideButton from '@src/components/common/SlideButton';
import PurchaseModal from '@src/components/Purchase/PurchaseModal';
import theme from '@src/styles/theme';
import { getSliceAddress } from '@src/utils/string';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

const SlideButton = dynamic(() => import('@src/components/common/SlideButton'), {
  ssr: false,
});

function Purchase() {
  const handleSlideSuccess = () => {
    console.log('success!!');
  };

  const addresss = '0xA0DDd71bbd9e807AbB52ceeD0EBc5426957Db2fc';

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
        <label htmlFor="my-modal-6" className="btn btn-sm modal-button">
          open
        </label>
        <input type="checkbox" id="my-modal-6" className="modal-toggle bg-black" />
        <PurchaseModal />
        <SlideButton onSlideDone={handleSlideSuccess} mainText="Confirm Purchase" />
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
`;

const StImageWrapper = styled.div`
  width: 90%;
  min-height: 348px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
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
`;
