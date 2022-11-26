import styled from '@emotion/styled';
import Info from '@src/assets/Info.svg';
import MinusIcon from '@src/assets/minusIcon.svg';
import PlusIcon from '@src/assets/plusIcon.svg';
import theme from '@src/styles/theme';
import React, { useState } from 'react';

interface CountInputProps {
  minNum?: number;
  setCurrentNum: React.Dispatch<React.SetStateAction<number>>;
  currentNum: number;
  maxNum?: number;
}

const warningMessage = 'Exceed max month';

function CountInput({ minNum, setCurrentNum, currentNum, maxNum = 12 }: CountInputProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (e.currentTarget.id) {
      case 'minus':
        if (currentNum < 2) {
          return;
        }
        setCurrentNum((prev) => prev - 1);

        return;
      default:
        setCurrentNum((prev) => prev + 1);

        return;
    }
  };

  return (
    <StRoot>
      <StInput>
        <button id="minus" onClick={handleClick}>
          <MinusIcon />
        </button>
        <p>{currentNum}</p>
        <button id="plus" onClick={handleClick}>
          <PlusIcon />
        </button>
      </StInput>
      {currentNum > maxNum && (
        <StNoticeLabel>
          <Info />
          <p>{warningMessage}</p>
        </StNoticeLabel>
      )}
    </StRoot>
  );
}

export default CountInput;

const StRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px 12px 16px;

  width: 157px;
  height: 49px;

  border: 1px solid ${theme.colors.gray200};
  border-radius: 100px;
  & button {
    width: 20px;
    height: 20px;
  }
`;

const StNoticeLabel = styled.label`
  position: absolute;
  display: flex;
  top: 46px;
  margin-top: 7px;
  & p {
    display: flex;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    top: 64px;
    color: #fb4e50;
    margin-left: 5.5px;
  }
`;
