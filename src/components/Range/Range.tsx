import { ChangeEvent, forwardRef, useCallback, useEffect, useState } from 'react';

import { getRoundedPercentValue } from './helpers';
import { Root, SLIDER_WIDTH_VAR } from './Range.style';
import { RangeProps } from './types';

export const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ onChange, step = 1, min = 0, max = 100, value: userValue, isDisabled = false }, ref) => {
    const [value, setValue] = useState<number>(userValue || 0);

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const currentValue = Number(event.target.value);

        setValue(currentValue);

        onChange?.(currentValue);
      },
      [onChange],
    );

    useEffect(() => {
      setValue(userValue || 0);
    }, [userValue]);

    return (
      <Root
        style={{ [SLIDER_WIDTH_VAR]: `${getRoundedPercentValue(value, min, max, step)}%` } as React.CSSProperties}
        ref={ref}
        min={min}
        max={max}
        step={step}
        value={value}
        type="range"
        onChange={handleChange}
        disabled={isDisabled}
      />
    );
  },
);

Range.displayName = 'Range';
