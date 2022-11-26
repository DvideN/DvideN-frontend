import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import Image from 'next/image';
import React, { HTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;

  width: string;
  rainbow?: boolean;

  [key: string]: any;
}

interface ButtonStyleProps {
  width: string;
  rainbow?: boolean;
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

function SmallButton({ children, handleClick, rainbow, ...props }: ButtonProps) {
  return (
    <StButton onClick={handleClick} rainbow={rainbow} {...props}>
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

const StButton = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;

  width: ${(props) => props.width};
  height: 30px;

  font-weight: 700;
  font-size: 13px;

  border: 2px solid transparent;
  border-radius: 50px;

  background: ${(props) => (props.rainbow ? theme.colors.rainbow : theme.colors.gray100)};
  color: ${(props) => (props.rainbow ? theme.colors.white : theme.colors.gray800)};
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: 2s rotate linear infinite;

  --angle: 0deg;

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
`;
