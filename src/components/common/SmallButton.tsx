import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import Image from 'next/image';
import React, { HTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;

  width: string;
  type?: 'black' | 'gray' | 'rainbow';

  [key: string]: any;
}

interface ButtonStyleProps {
  width: string;
  bgColor: string;
  color: string;
}

interface ImageProps {
  Icon: () => JSX.Element;

  [key: string]: any;
}

interface LabelProps {
  className?: string;
  children: string;

  [key: string]: any;
}

function SmallButton({ children, handleClick, type = 'gray', ...props }: ButtonProps) {
  return (
    <StButton
      onClick={handleClick}
      bgColor={GetBackgroundColor(type)}
      color={GetFontColor(type)}
      {...props}
    >
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

const GetBackgroundColor = (btnType: 'black' | 'gray' | 'rainbow'): string => {
  switch (btnType) {
    case 'black':
      return theme.colors.gray900;
    case 'gray':
      return theme.colors.gray100;
    case 'rainbow':
      return theme.colors.rainbow;
  }
};

const GetFontColor = (btnType: 'black' | 'gray' | 'rainbow'): string => {
  switch (btnType) {
    case 'black':
    case 'rainbow':
      return theme.colors.white;
    case 'gray':
      return theme.colors.gray800;
  }
};

export default SmallButton;

const StButton = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;

  width: ${(props) => props.width};
  height: 34px;

  font-weight: 700;
  font-size: 13px;

  border: 2px solid transparent;
  border-radius: 50px;

  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
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
