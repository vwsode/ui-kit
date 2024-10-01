import { FC, forwardRef } from 'react';

import { Field, Input } from './TextField.styles';

import type { TextFieldProps } from './types';

export const TextField: FC<TextFieldProps> = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      testId,
      appearance = 'standard',
      isCompact = false,
      isDisabled = false,
      isInvalid = false,
      isMonospaced = false,
      fullWidth = false,
      ...props
    },
    ref,
  ) => {
    return (
      <Field
        fullWidth={fullWidth}
        appearance={appearance}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isCompact={isCompact}
        testId={testId}
      >
        <Input
          type="text"
          ref={ref}
          disabled={isDisabled}
          isMonospaced={isMonospaced}
          isCompact={isCompact}
          testId={testId}
          {...props}
        />
      </Field>
    );
  },
);

TextField.displayName = 'TextField';
