import { ChangeEvent, forwardRef, useCallback, useState } from 'react';

import { Field, Input, Label } from './Checkbox.styles';
import { CheckboxProps } from './types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      testId,
      onChange,
      label,
      isChecked = false,
      size = 'medium',
      isDisabled = false,
      isInvalid = false,
      isRequired = false,
      isIndeterminate = false,
      ...props
    },
    ref,
  ) => {
    const [checked, setChecked] = useState<boolean>(isChecked);

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        onChange?.(event);
      },
      [onChange],
    );

    return (
      <Field testId={testId}>
        <Input
          {...props}
          size={size}
          ref={ref}
          onChange={handleChange}
          testId={testId}
          disabled={isDisabled}
          checked={isChecked === undefined ? checked : isChecked}
          required={isRequired}
          isInvalid={isInvalid}
          isIndeterminate={isIndeterminate}
          type="checkbox"
        />
        {label && <Label testId={testId}>{label}</Label>}
      </Field>
    );
  },
);

Checkbox.displayName = 'Checkbox';
