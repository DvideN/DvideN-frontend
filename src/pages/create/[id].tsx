import styled from '@emotion/styled';
import snoopImage from '@src/assets/snoop.png';
import CommonError from '@src/components/common/CommonError';
import ErrorBoundary from '@src/components/common/ErrorBoundary';
import Header from '@src/components/common/Header';
import Loading from '@src/components/common/Loading';
import SlideButton from '@src/components/common/SlideButton';
import SSRSafeSuspense from '@src/components/common/SSRSafeSuspense';
import CreateDetailInput from '@src/components/Create/CreateDetailInput';
import CreateSale from '@src/components/Create/CreateSale';
import theme from '@src/styles/theme';
import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useAccount } from 'wagmi';

function CreateDetail() {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      <SSRSafeSuspense
        fallback={
          <div className="w-[100%] ml-[50%]">
            <Loading isIcon={true} />
          </div>
        }
      >
        <Resolved />
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
}

const Resolved = () => {
  const router = useRouter();
  const { query } = router;
  const {
    query: { id },
  } = router;

  console.log('id', id);

  const [price, setPrice] = useState('');
  const [downPaymentRate, setDownPaymentRate] = useState('');
  const [installmentMonth, setInstallmentMonth] = useState('');
  // const { address } = useAccount();

  // const approveFunc = async () => {
  //   console.log('query?.id', query?.id);
  //   // await setApproveAll(NftMintingAddress, address);
  //   await approve(NftMintingAddress, address, 117);
  // };
  const handleSuccess = () => {
    localStorage.setItem('id', String(id));
    localStorage.setItem(
      'selectedItem',
      JSON.stringify({
        price: price,
        downPaymentRate: downPaymentRate,
        installmentMonth: installmentMonth,
        imageUrl: query?.imageUrl,
        name: query?.name,
      }),
    );
    router.push('/create/success');
  };

  // useEffect(() => {
  //   approveFunc();
  // }, []);

  return (
    <>
      <Header />
      <StWrap>
        <StTitleLabel>Enter Details</StTitleLabel>
        {query?.imageUrl && <CreateSale imageUrl={query?.imageUrl} name={query?.name} />}
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
          onSlideDone={handleSuccess}
          mainText={'Confirm Upload'}
          isAble={price != '' && downPaymentRate != '' && installmentMonth != ''}
        />
      </StWrap>
    </>
  );
};

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

// const StImageWrap = styled.div`
//   width: 89.3%;
//   aspect-ratio: 335 / 348;
//   position: relative;

//   border-radius: 8px;
//   overflow: hidden;
// `;

// const StNameLabel = styled.p`
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 25px;

//   color: ${theme.colors.gray600};

//   margin-top: 16px;
// `;

const StInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;

  width: 85%;
  margin-top: 40px;
  margin-bottom: 20px;
`;
