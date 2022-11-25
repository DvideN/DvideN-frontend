import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import React, { HTMLAttributes } from 'react';

interface LabelProps extends HTMLAttributes<HTMLParagraphElement> {
  fontSize: string;
  children: string;

  [key: string]: any;
}

interface StyleProps {
  fontSize: string;
}

function NftNameLabel({ fontSize, children }: LabelProps) {
  return (
    <div>
      <StNameLabel fontSize={fontSize}>{children}</StNameLabel>
    </div>
  );
}

export default NftNameLabel;

const StNameLabel = styled.p<StyleProps>`
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  color: ${theme.colors.gray900};
`;
