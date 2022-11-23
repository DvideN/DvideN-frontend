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
    case 'rainbow':
      return theme.colors.gray900;
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

  border-radius: 50px;
  border: 1px solid white;

  background: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};

  font-weight: 700;
  font-size: 18px;
`;
