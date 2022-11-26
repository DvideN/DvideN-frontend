import 'react-circular-progressbar/dist/styles.css';

import styled from '@emotion/styled';
import IcCheck from '@src/assets/IcCheck.svg';
import IcLimited from '@src/assets/IcLimited.svg';
import IcLock from '@src/assets/icLock.svg';
import theme from '@src/styles/theme';
import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

interface Props {
  totalMonth: number;
  remainingMonth: number;
  src: string;
  status: 'pending' | 'done' | 'fail';
}

interface StyleProps {
  src: string;
}

function PendingCircle({ totalMonth, remainingMonth, src, status }: Props) {
  const percentage = ((totalMonth - remainingMonth) / totalMonth) * 100;

  const getStatusLogo = () => {
    const iconStyle = 'absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]';

    switch (status) {
      case 'pending':
        return <IcLock className={iconStyle} />;
      case 'done':
        return <IcCheck className={iconStyle} />;
      case 'fail':
        return <IcLimited className={iconStyle} />;
    }
  };

  return (
    <StWrap>
      <StProgressWrap src={src}>
        <StCircleWrap>
          {status == 'fail' || (
            <CircularProgressbar
              value={percentage}
              strokeWidth={5}
              styles={buildStyles({
                pathColor: '#18CF6C',
                trailColor: '#E8E9EA',

                pathTransitionDuration: 0.6,
              })}
            />
          )}
          {getStatusLogo()}
        </StCircleWrap>
      </StProgressWrap>
      {status == 'done' || (
        <StRemainLabel>
          {status != 'fail' ? `${remainingMonth} months left` : 'Payment Fail'}
        </StRemainLabel>
      )}
    </StWrap>
  );
}

export default PendingCircle;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StProgressWrap = styled.div<StyleProps>`
  width: 98px;
  height: 102px;
  position: relative;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.src}) no-repeat;
  background-size: 100%;

  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StCircleWrap = styled.div`
  width: 75px;
  height: 75px;
`;

const StRemainLabel = styled.p`
  margin-top: 10px;
  font-size: 13px;
  font-weight: 700;
  color: ${theme.colors.gray600};
`;
