import { useEffect, useState } from 'react';
import { Dimensions } from './types';
import debounce from 'debounce';

export const useWindowSize = (): Dimensions => {
  const { clientWidth: initialWidth, clientHeight: initialHeight } =
    document.documentElement;
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: initialWidth,
    height: initialHeight,
  });

  const handleResize = () => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    setDimensions({
      width,
      height,
    });
  };

  const debouncedHandleResize = debounce(handleResize, 300);

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return dimensions;
};
