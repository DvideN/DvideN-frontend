import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import Image from 'next/image';
import React, { HTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;

  [key: string]: any;
}

interface ImageProps {
  // className?: string;
  // src: string;
  Icon: () => JSX.Element;

  [key: string]: any;
}

interface LabelProps {
  className?: string;
  children: string;

  [key: string]: any;
}

function SmallButton({ children, handleClick, ...props }: ButtonProps) {
  return (
    <StButton onClick={handleClick} {...props}>
      {children}
    </StButton>
  );
}

SmallButton.Icon = function SmallButtonIcon({ Icon }: ImageProps) {
  return <Icon />;
};

SmallButton.Label = function SmallButtonLabel({ children, ...props }: LabelProps) {
  return <p {...props}>{children}</p>;
};

export default SmallButton;

const StButton = styled.button`
  padding: 7px 12px;
  height: 30px;

  border: 1px solid rgba(0, 0, 0, 0.02);
  border-radius: 100px;

  background: ${theme.colors.gray100};
  color: ${theme.colors.gray800};

  font-weight: 700;
  font-size: 13px;

  opacity: 0.9;

  display: flex;
  align-items: center;
  column-gap: 8px;
`;
