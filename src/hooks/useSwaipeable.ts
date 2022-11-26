import {
  ConfigurationOptions,
  SwipeableHandlers,
  SwipeableProps,
  SwipeablePropsWithDefaultOptions,
} from '@src/types/swipe';
import { defaultProps, getHandlers, initialState, updateTransientState } from '@src/utils/swipe';
import React, { useRef } from 'react';

export function useSwipeable(options: SwipeableProps): SwipeableHandlers {
  const { trackMouse } = options;
  const transientState = useRef({ ...initialState });
  const transientProps = useRef<SwipeablePropsWithDefaultOptions>({
    ...defaultProps,
  });

  // track previous rendered props
  const previousProps = useRef<SwipeablePropsWithDefaultOptions>({
    ...transientProps.current,
  });

  previousProps.current = { ...transientProps.current };

  // update current render props & defaults
  transientProps.current = {
    ...defaultProps,
    ...options,
  };
  // Force defaults for config properties
  let defaultKey: keyof ConfigurationOptions;

  for (defaultKey in defaultProps) {
    if (transientProps.current[defaultKey] === void 0) {
      (transientProps.current[defaultKey] as any) = defaultProps[defaultKey];
    }
  }

  const [handlers, attachTouch] = React.useMemo(
    () =>
      getHandlers(
        (stateSetter) =>
          (transientState.current = stateSetter(transientState.current, transientProps.current)),
        { trackMouse },
      ),
    [trackMouse],
  );

  transientState.current = updateTransientState(
    transientState.current,
    transientProps.current,
    previousProps.current,
    attachTouch,
  );

  return handlers;
}
