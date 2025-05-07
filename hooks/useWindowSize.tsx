'use client';
import { findDeviceType } from '../lib/findDeviceType';
import { useState, useEffect } from 'react';

type WindowSize = {
  width: number;
  height: number;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const deviceType = findDeviceType(windowSize?.width);

  return { windowSize, deviceType };
};
