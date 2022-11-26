import styled from '@emotion/styled';
import { PURCHASE_OPTION } from '@src/constants/parchase';
import theme from '@src/styles/theme';
import React from 'react';

import CountInput from '../common/CountInput';

const ticker = 'MATIC';

interface PurchaseFormProps {
  installmentMonth?: number;
  installmentPrice?: number;
  downPayment?: number;
  setInstallmentMonth: React.Dispatch<React.SetStateAction<number>>;
  maxMonth?: number;
}

function PurchaseForm({
  installmentMonth = 1,
  setInstallmentMonth,
  installmentPrice,
  downPayment,
  maxMonth = 12,
}: PurchaseFormProps) {
  return (
    <StForm>
      <StRow>
        <StLabel>{PURCHASE_OPTION.INSTALLMENT_MONTH}</StLabel>
        <CountInput
          maxNum={maxMonth}
          minNum={1}
          currentNum={installmentMonth}
          setCurrentNum={setInstallmentMonth}
        />
      </StRow>
      <StRow>
        <StLabel>{PURCHASE_OPTION.INSTALLMENT_PRICE}</StLabel>
        <StPlainText>
          {installmentPrice} {ticker}
        </StPlainText>
      </StRow>
      <StRow>
        <StLabel>{PURCHASE_OPTION.DOWN_PAYMENT}</StLabel>
        <StPlainText>
          {downPayment} {ticker}
        </StPlainText>
      </StRow>
    </StForm>
  );
}

export default PurchaseForm;

const StForm = styled.section`
  width: 90%;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const StRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 49px;
`;
const StLabel = styled.label`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: ${theme.colors.gray400};
`;
const StPlainText = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;

  text-align: right;

  color: ${theme.colors.gray600};
`;
