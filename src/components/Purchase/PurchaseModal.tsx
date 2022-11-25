import React from 'react';

import SendTransaction from './SendTransaction';

function PurchaseModal() {
  return (
    <div className="modal modal-bottom sm:modal-middle">
      <div className="modal-box h-[574px]">
        <div className="top-[21px] flex justify-end">
          <label htmlFor="my-modal-6" className="cursor-pointer absolute top-[28px]">
            X
          </label>
        </div>
        <SendTransaction />
      </div>
    </div>
  );
}

export default PurchaseModal;
