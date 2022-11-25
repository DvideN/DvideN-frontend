import styled from '@emotion/styled';
import { PURCHASE_MODAL } from '@src/constants/parchase';
import theme from '@src/styles/theme';
import React from 'react';

function SendTransaction() {
  return (
    <>
      <StTitle className="font-bold text-lg">{PURCHASE_MODAL['default'].title}</StTitle>
      <StDescription className="py-4">{PURCHASE_MODAL['default'].description}</StDescription>
    </>
  );
}

export default SendTransaction;
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
