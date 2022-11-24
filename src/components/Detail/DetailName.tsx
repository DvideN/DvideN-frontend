import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import React from 'react';

interface DetailProps {
  name: string;
  account: string;
}

function DetailName({ name, account }: DetailProps) {
  return (
    <StTitleWrap>
      <StTitleLabel>{name}</StTitleLabel>
      <StAddressLabel>{account}</StAddressLabel>
    </StTitleWrap>
  );
}

export default DetailName;

const StTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StTitleLabel = styled.p`
  font-weight: 700;
  font-size: 28px;

  color: ${theme.colors.gray900};
`;

const StAddressLabel = styled.p`
  font-weight: 700;
  font-size: 16px;

  color: ${theme.colors.gray500};

  margin-top: 14px;
`;
