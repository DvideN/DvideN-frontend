import styled from '@emotion/styled';
import DisabledArrow from '@src/assets/disabledArrow.svg';
import Arrow from '@src/assets/rightArrow.svg';
import { useSwipeable } from '@src/hooks/useSwaipeable';
import theme from '@src/styles/theme';
import React, { useEffect, useRef, useState } from 'react';

const dirTypes = ['Left', 'Down', 'Up'];

const findLeft = (element: HTMLElement) => {
  const rec = element.getBoundingClientRect();

  return rec.left + window.scrollX;
};

interface disabledStyleProps {
  isAbled?: boolean;
}

interface overlayStyleProps {
  width: number;
}

interface SlideButtonProps {
  mainText?: string;
  overlayText?: string;
  onSlideDone: () => void;
  reset?: boolean;
  delta?: number;
  minSlideWidth?: number;
  minSlideVelocity?: number;
  customCaretWidth?: number;
  isAbled?: boolean;
  [key: string]: any;
}

function SlideButton({
  mainText,
  overlayText,
  onSlideDone,
  reset,
  delta = 10,
  minSlideWidth = 0.6,
  minSlideVelocity = 0.6,
  customCaretWidth = 53,
  isAbled = true,
}: SlideButtonProps) {
  const [overlayWidth, setOverlayWidth] = useState(customCaretWidth);
  const [slideComplete, setSlideComplete] = useState(false);
  const buttonRef = useRef(null) as any;

  useEffect(() => {
    if (reset) {
      setSlideComplete(false);
      setOverlayWidth(customCaretWidth);
    }
  }, [reset]);

  const handlers = useSwipeable({
    onSwipedRight: (data) => {
      if (slideComplete || !isAbled) return;

      const butWidth = buttonRef?.current?.offsetWidth;

      if (data.velocity > minSlideVelocity) {
        setOverlayWidth(butWidth);
        setSlideComplete(true);
        setTimeout(() => onSlideDone(), 100);
      } else {
        const offsetLeft = findLeft(buttonRef.current);
        const startPos = Math.abs(data.initial[0] - offsetLeft);

        if (
          startPos <= 100 + customCaretWidth &&
          (data.event.type === 'touchend'
            ? (data.event as any).changedTouches[0].clientX - offsetLeft
            : (data.event as any).offsetX) >
            minSlideWidth * butWidth
        ) {
          setOverlayWidth(butWidth);
          setSlideComplete(true);
          setTimeout(() => onSlideDone(), 100);
        } else setOverlayWidth(customCaretWidth);
      }
    },
    onSwiping: (data) => {
      if (slideComplete || dirTypes.includes(data.dir) || !isAbled) return;

      const offsetLeft = findLeft(buttonRef.current);
      const startPos = Math.abs(data.initial[0] - offsetLeft);

      if (startPos <= 100 + customCaretWidth) {
        if (data.event.type && data.event.type === 'touchmove')
          setOverlayWidth((data.event as any).touches[0].clientX - offsetLeft);
        else {
          if ((data.event as any).offsetX > customCaretWidth) {
            setOverlayWidth((data.event as any).offsetX);
          }
        }
      }
    },
    delta,
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <StRoot
      // className={`slide-but ${classList}`}
      {...handlers}
      ref={(t) => {
        handlers?.ref(t);
        buttonRef.current = t;
      }}
      isAbled={isAbled}
    >
      <StRailWrapper width={overlayWidth}>
        <StRail className="slide-overlay-wrapper">
          <StCaretWrapper
            style={{
              width: customCaretWidth,
              maxWidth: customCaretWidth,
            }}
          >
            {isAbled ? <Arrow /> : <DisabledArrow />}
          </StCaretWrapper>
          <StTxt className="slide-overlay-txt" width={overlayWidth}>
            {overlayText}
          </StTxt>
        </StRail>
      </StRailWrapper>

      <StMainTxt isAbled={isAbled}>{mainText}</StMainTxt>
    </StRoot>
  );
}

export default SlideButton;

const StRoot = styled.div<disabledStyleProps>`
  & * {
    pointer-events: none;
    user-select: none;
  }
  /* min-width: 200px; */
  padding: 5px;
  position: relative;
  overflow: hidden;
  color: #000;
  display: flex;
  align-items: center;

  cursor: default;
  user-select: none;

  position: relative;

  background: ${(props) => (props.isAbled ? theme.colors.green700 : theme.colors.gray300)};
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  height: 63px;
  width: 90%;
  margin-top: 32px;
`;

const StRailWrapper = styled.div<overlayStyleProps>`
  position: relative;
  height: 100%;
  width: ${(props) => `${props.width}px`};
  max-width: calc(100%-40px);
`;
const StRail = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
const StTxt = styled.div<overlayStyleProps>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  width: ${(props) => `${props.width}px`};
  max-width: calc(100%-40px);
`;
const StCaretWrapper = styled.div`
  position: absolute;

  right: 0;
  top: 50%;

  transform: translateY(-50%);
  z-index: 2;
  display: flex;
  align-items: center;

  justify-content: center;
  min-width: 53px;
  height: 53px;
  border-radius: 100%;

  background: #ffffff;
`;

const StMainTxt = styled.div<disabledStyleProps>`
  position: absolute;
  color: ${(props) => (props.isAbled ? 'white' : 'rgba(0, 0, 0, 0.25)')};
  left: 50%;
  transform: translateX(-50%);
`;
