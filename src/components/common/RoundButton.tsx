import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import React, { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: string;

  width?: string;
  height?: string;

  styleType?: 'plain' | 'rainbow' | 'success';

  [key: string]: any;
}

interface StButtonProps extends ButtonProps {
  bgColor: string;
  fontColor: string;
}

function RoundButton({ children, handleClick, styleType = 'plain', ...props }: ButtonProps) {
  return (
    <StButton
      onClick={handleClick}
      bgColor={GetBackgroundColor(props.disabled ? 'disabled' : styleType)}
      fontColor={GetFontColor(props.disabled ? 'disabled' : styleType)}
      {...props}
    >
      {children}
    </StButton>
  );
}

const GetBackgroundColor = (btnType: 'plain' | 'rainbow' | 'disabled' | 'success'): string => {
  switch (btnType) {
    case 'plain':
      return theme.colors.gray900;
    case 'rainbow':
      return theme.colors.rainbow;
    case 'disabled':
      return theme.colors.gray300;
    case 'success':
      return theme.colors.green700;
    default:
      return theme.colors.gray900;
  }
};

const GetFontColor = (btnType: 'plain' | 'rainbow' | 'disabled' | 'success'): string => {
  switch (btnType) {
    case 'plain':
    case 'rainbow':
    case 'success':
    default:
      return theme.colors.white;
    case 'disabled':
      return theme.colors.gray400;
  }
};

export default RoundButton;

const StButton = styled.button<StButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: 2s rotate linear infinite;

  font-weight: 700;
  font-size: 18px;

  border: 4px solid transparent;
  border-radius: 50px;

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
