import React, { forwardRef } from 'react';

import { Input, Label, Text, Wrapper } from './Radio.style.ts';
import { RadioProps } from './types';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      ariaLabel,
      onChange,
      testId,
      name,
      isDisabled = false,
      isChecked = false,
      isRequired = false,
      isInvalid = false,
      ...props
    },
    ref,
  ) => {
    const isLabelText = typeof label === 'string';

    return (
      <Label testId={testId} aria-label={ariaLabel}>
        <Wrapper>
          <Input
            {...props}
            name={name}
            aria-invalid={isInvalid}
            isInvalid={isInvalid}
            required={isRequired}
            disabled={isDisabled}
            checked={isChecked}
            testId={testId}
            onChange={onChange}
            ref={ref}
            type="radio"
          />
        </Wrapper>
        {isLabelText ? <Text testId={testId}>{label}</Text> : label}
      </Label>
    );
  },
);

Radio.displayName = 'Radio';
