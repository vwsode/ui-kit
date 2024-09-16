import { ChangeEvent, forwardRef, useState, FocusEvent, useEffect } from 'react';

import { REQUIRED_SYMBOL } from '@/constants/utils';

import { Text, Input, Label, InputBox, RequiredSymbol } from './Checkbox.styles';

import type { CheckboxProps } from './types';

/**
 *
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    label,
    testId,
    onChange,
    onBlur,
    name = '',
    value = '',
    defaultChecked = false,
    isDisabled = false,
    isChecked: controlledChecked,
    isRequired = false,
    isIndeterminate = false,
    isInvalid = false,
  } = props;
  const [isChecked, setIsChecked] = useState(controlledChecked !== undefined ? controlledChecked : defaultChecked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setIsChecked(newChecked);

    if (onChange) {
      onChange({ target: { checked: newChecked } } as ChangeEvent<HTMLInputElement>);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
  };

  useEffect(() => {
    if (controlledChecked !== undefined) {
      setIsChecked(controlledChecked);
    }
  }, [controlledChecked]);

  return (
    <Label testId={testId} aria-checked={isChecked} aria-required={isRequired} aria-disabled={isDisabled}>
      <InputBox testId={testId}>
        <Input
          type="checkbox"
          onChange={handleChange}
          checked={isChecked}
          disabled={isDisabled}
          required={isRequired}
          isIndeterminate={isIndeterminate}
          isInvalid={isInvalid}
          testId={testId}
          ref={ref}
          onBlur={handleBlur}
          name={name}
          value={value}
        />
      </InputBox>
      {label && (
        <Text isDisabled={isDisabled}>
          {label}
          <RequiredSymbol>{isRequired && REQUIRED_SYMBOL}</RequiredSymbol>
        </Text>
      )}
    </Label>
  );
});

Checkbox.displayName = 'Checkbox';
