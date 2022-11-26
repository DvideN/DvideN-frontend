import styled from '@emotion/styled';
import SlideButton from '@src/components/common/SlideButton';
import theme from '@src/styles/theme';
import React from 'react';

interface InputProps {
  title: string;
  unit: string;
  value: string | number;
  setValue: any;
}

function CreateDetailInput({ title, unit, value, setValue }: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <StWrap>
      <StTitleLabel>{title}</StTitleLabel>
      <StInputWrap>
        <StInputField type="number" value={value} onChange={handleChange} />
        <StUnitLabel>{unit}</StUnitLabel>
      </StInputWrap>
    </StWrap>
  );
}

export default CreateDetailInput;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StTitleLabel = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;

  color: ${theme.colors.gray400};
`;

const StInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.gray300};

  padding-bottom: 3px;
`;

const StInputField = styled.input`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;

  color: ${theme.colors.gray900};
`;

const StUnitLabel = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  color: ${theme.colors.gray500};
`;
