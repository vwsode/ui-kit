const snapToStep = (value: number, min: number, step: number): number => {
  const adjustedValue = value - min;
  const numSteps = Math.round(adjustedValue / step);
  return numSteps * step + min;
};

export const getRoundedPercentValue = (value: number, min: number, max: number, step: number): string => {
  let percent = '0';
  if (min < max && value > min) {
    const snappedValue = snapToStep(value, min, step);
    percent = (((snappedValue - min) / (max - min)) * 100).toFixed(2);
  }
  return percent;
};
