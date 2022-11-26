import IcCheck from '@src/assets/IcCheck-40.svg';
import RoundButton from '@src/components/common/RoundButton';
import React from 'react';

interface ModalProps {
  title: string;
  description: string;

  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function SuccessModal({ title, description, handleClick }: ModalProps) {
  return (
    <div className="modal modal-bottom sm:modal-middle">
      <div className="modal-box h-[327px] flex flex-col items-center justify-between">
        <div className="pt-[10px] flex flex-col items-center">
          <IcCheck />
          <p className="mt-[16px] text-[28px] font-bold leading-[38px] text-center whitespace-pre-wrap">
            {title}
          </p>
          <p className="mt-[12px] text-[13px] leading-[18px] text-center text-gray-400">
            {description}
          </p>
        </div>
        <RoundButton width={'100%'} height={'65px'} onClick={handleClick}>
          Okay
        </RoundButton>
      </div>
    </div>
  );
}

export default SuccessModal;
