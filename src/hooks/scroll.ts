import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

export const useWindowScroll = (cb?: () => void): void => {
  useEffect(() => {
    if (!cb) {
      return;
    }

    window.addEventListener('scroll', cb);

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('scroll', cb);
    };
  }, [cb]);
};

export const useScrollHandler = (
  maxHeight?: number,
  onEnd?: () => void
): {
  isStart: boolean;
  ref: RefObject<HTMLDivElement>;
  onScroll?: () => void;
} => {
  const MIN_BOTTOM_OFFSET = 10;
  const ref = useRef<HTMLDivElement>(null);
  const [isStart, setStart] = useState<boolean>(true);
  const [, setEnd] = useState<boolean>(false);
  const element = ref.current;
  const setEndHandler = useCallback(
    (newValue: boolean): void => {
      setEnd((prevState: boolean): boolean => {
        if (prevState !== newValue && newValue && onEnd) {
          setTimeout(() => onEnd());
        }
        return newValue;
      });
    },
    [setEnd, onEnd]
  );
  const onScrollHandler = useCallback(() => {
    if (element && maxHeight) {
      setStart(element.scrollTop === 0);
      setEndHandler(
        element.scrollTop + maxHeight + MIN_BOTTOM_OFFSET > element.scrollHeight
      );
    }
  }, [maxHeight, setStart, setEndHandler, element]);
  const onScrollWindowHandler = useCallback(() => {
    if (element) {
      const { top } = element.getBoundingClientRect();

      setStart(top > 0);
      setEndHandler(
        window.scrollY + window.innerHeight + MIN_BOTTOM_OFFSET >
          document.body.scrollHeight
      );
    }
  }, [element, setStart, setEndHandler]);

  const onScroll = maxHeight ? onScrollHandler : undefined;
  const onScrollWindow = maxHeight ? undefined : onScrollWindowHandler;

  useWindowScroll(onScrollWindow);

  return {
    isStart,
    ref,
    onScroll: maxHeight ? onScroll : undefined,
  };
};
