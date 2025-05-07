export const findDeviceType = (width: number) => {
  if (width < 400) return 'mobile';
  else if (width >= 400 && width < 1024) return 'tablet';
  else if (width >= 1024) return 'desktop';
  else return 'unknown';
};
