import { FC } from 'react';

import { Field, Input } from './TextField.styles';

import type { TextFieldProps } from './types';

export const TextField: FC<TextFieldProps> = ({
  testId,
  elemAfter,
  elemBefore,
  inputRef,
  appearance = 'standard',
  isCompact = false,
  isRequired = false,
  isDisabled = false,
  isInvalid = false,
  isMonospaced = false,
  fullWidth = false,
  ...props
}) => {
  return (
    <Field
      fullWidth={fullWidth}
      appearance={appearance}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isCompact={isCompact}
      testId={testId}
    >
      {elemBefore}
      <Input
        required={isRequired}
        ref={inputRef}
        disabled={isDisabled}
        isMonospaced={isMonospaced}
        isCompact={isCompact}
        testId={testId}
        {...props}
      />
      {elemAfter}
    </Field>
  );
};

TextField.displayName = 'TextField';
