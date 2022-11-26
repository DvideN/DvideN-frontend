import styled from '@emotion/styled';
import CommonError from '@src/components/common/CommonError';
import ErrorBoundary from '@src/components/common/ErrorBoundary';
import SSRSafeSuspense from '@src/components/common/SSRSafeSuspense';
import { PURCHASE_MODAL, PURCHASE_MODAL_SUBTITLE } from '@src/constants/parchase';
import theme from '@src/styles/theme';
import { TransactionType } from '@src/types/purchase';
import React, { useState } from 'react';

import Loading from '../common/Loading';
import RoundButton from '../common/RoundButton';
import { useQuery } from '@tanstack/react-query';
import { getMyNft } from '@src/utils/getMyNft';
import { getNextTxStep } from '@src/utils/getNextTxStep';

interface stageProps {
  currentType: TransactionType;
  setCurrentType: React.Dispatch<React.SetStateAction<TransactionType>>;
}

function SendTransaction() {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      <SSRSafeSuspense
        fallback={
          <>
            <StTitle className="font-bold text-lg">{PURCHASE_MODAL['default'].title}</StTitle>
            <StDescription className="py-4 mb-[40px]">
              {PURCHASE_MODAL['default'].description}
            </StDescription>
            <Loading isIcon={true} />
          </>
        }
      >
        <Resolved />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
}

const Resolved = () => {
  const [currentType, setCurrentType] = useState<TransactionType>('collateral');

  return (
    <>
      <StTitle className="font-bold text-lg">{PURCHASE_MODAL['default'].title}</StTitle>
      <StDescription className="py-4">{PURCHASE_MODAL['default'].description}</StDescription>
      <Collateral currentType={currentType} setCurrentType={setCurrentType} />
      <Wrapping currentType={currentType} setCurrentType={setCurrentType} />
      <Transfer currentType={currentType} setCurrentType={setCurrentType} />
    </>
  );
};

const Transfer = ({ currentType, setCurrentType }: stageProps) => {
  // const { data, isSuccess } = useQuery(['test1'], () => getMyNft(), {
  //   suspense: true,
  // });
  // use reactquery + getNextTxStep utils
  const isSuccess = false;
  const handleClick = () => {};

  return (
    <StRoot>
      <StSubTitle>{PURCHASE_MODAL_SUBTITLE['TRANSFER']}</StSubTitle>
      {isSuccess ? (
        <RoundButton width={'80%'} height={'65px'} onClick={handleClick}>
          Done! 🎉
        </RoundButton>
      ) : (
        <RoundButton width={'80%'} height={'65px'} disabled={currentType !== 'transfer'}>
          Sign
        </RoundButton>
      )}
    </StRoot>
  );
};
const Collateral = ({ currentType, setCurrentType }: stageProps) => {
  // use reactquery + getNextTxStep utils
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setIsSuccess(true);
      setCurrentType(getNextTxStep('collateral'));
    }, 500);
  };

  return (
    <StRoot>
      <StSubTitle>{PURCHASE_MODAL_SUBTITLE['COLLATERAL']}</StSubTitle>
      {isSuccess ? (
        <RoundButton width={'80%'} height={'65px'}>
          Done! 🎉
        </RoundButton>
      ) : (
        <RoundButton
          width={'80%'}
          height={'65px'}
          disabled={currentType !== 'collateral'}
          onClick={handleClick}
        >
          Sign
        </RoundButton>
      )}
    </StRoot>
  );
};
const Wrapping = ({ currentType, setCurrentType }: stageProps) => {
  // use reactquery + getNextTxStep utils
  const isSuccess = false;

  return (
    <StRoot>
      <StSubTitle>{PURCHASE_MODAL_SUBTITLE['WRAPPING']}</StSubTitle>
      {isSuccess ? (
        <RoundButton width={'80%'} height={'65px'}>
          Done! 🎉
        </RoundButton>
      ) : (
        <RoundButton width={'80%'} height={'65px'} disabled={currentType !== 'warpping'}>
          Sign
        </RoundButton>
      )}
    </StRoot>
  );
};

export default SendTransaction;

const StRoot = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  flex-direction: column;
`;

const StTitle = styled.h1`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  white-space: pre-line;

  color: ${theme.colors.gray900};
`;
const StDescription = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;

  color: ${theme.colors.gray400};
  white-space: pre-line;
`;

const StSubTitle = styled.h2`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;

  text-align: center;
  margin-top: 24px;
  margin-bottom: 8px;

  color: ${theme.colors.gray600};
`;
