import React from 'react';

import SendTransaction from './SendTransaction';

interface PurchaseModalProps {
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
}

function PurchaseModal({ setReset }: PurchaseModalProps) {
  const handleClick = () => {
    setReset(true);
  };

  return (
    <div className="modal modal-bottom sm:modal-middle">
      <div className="modal-box h-[574px]">
        <div className="top-[21px] flex justify-end">
          <label
            htmlFor="my-modal-6"
            className="cursor-pointer absolute top-[28px]"
            onClick={handleClick}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
          >
            X
          </label>
        </div>
        <SendTransaction />
      </div>
    </div>
  );
}
export default PurchaseModal;
