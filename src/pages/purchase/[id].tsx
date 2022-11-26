import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
// import SlideButton from '@src/components/common/SlideButton';
import PurchaseModal from '@src/components/Purchase/PurchaseModal';
import dynamic from 'next/dynamic';
import React from 'react';

const SlideButton = dynamic(() => import('@src/components/common/SlideButton'), {
  ssr: false,
});

function Purchase() {
  const handleSlideSuccess = () => {
    console.log('success!!');
  };

  return (
    <>
      <Header />
      <StMain>
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
  justify-content: center;
  align-items: center;
`;
