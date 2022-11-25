import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
import SlideButton from '@src/components/common/SlideButton';
import PurchaseModal from '@src/components/Purchase/PurchaseModal';
import React from 'react';

function Purchase() {
  return (
    <>
      <Header />
      <label htmlFor="my-modal-6" className="btn btn-sm modal-button">
        open
      </label>
      <input type="checkbox" id="my-modal-6" className="modal-toggle bg-black" />
      <PurchaseModal />
      <SlideButton />
    </>
  );
}

export default Purchase;
