import RoundButton from '@src/components/common/RoundButton';
import React from 'react';

function UnlockNftModal() {
  return (
    <div className="modal modal-bottom sm:modal-middle">
      <div className="modal-box h-[220px] flex flex-col items-center justify-between">
        <div>
          <p className="text-[28px] font-bold leading-[38px] text-center">Unlock NFT</p>
          <p className="mt-[12px] text-[13px] leading-[18px] text-center">
            Please sign to unlock your NFT
          </p>
        </div>
        <RoundButton width={'100%'} height={'65px'}>
          Sign
        </RoundButton>
      </div>
    </div>
  );
}

export default UnlockNftModal;
