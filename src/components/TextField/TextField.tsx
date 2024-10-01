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
      ...props
    },
    ref,
  ) => {
    return (
      <div>
        <Field
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
            {...props}
          />
        </Field>
      </div>
    );
  },
);

TextField.displayName = 'TextField';
