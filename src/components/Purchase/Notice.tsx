import styled from '@emotion/styled';
import { NOTICE } from '@src/constants/parchase';
import theme from '@src/styles/theme';
import React from 'react';
function Notice() {
  return (
    <StSection>
      <StTitle>{NOTICE.TITLE}</StTitle>
      <StDescription>{NOTICE.DESCRIPTION}</StDescription>
    </StSection>
  );
}

export default Notice;

const StSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;

  width: 90%;
  height: 94px;

  background: ${theme.colors.gray100};
  border-radius: 12px;
`;

const StTitle = styled.h4`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  color: ${theme.colors.gray500};
`;
const StDescription = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;

  /* gray400 */

  color: ${theme.colors.gray400};
`;
