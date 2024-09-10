import React, { ChangeEvent, forwardRef, useEffect, useState } from 'react';

import { KEY } from '../../constants/KeyCodes';
import { composeTestingPath } from '../../utils';

import { ToggleSelector } from './constants';
import { Input, Root, ToggleIcon } from './Toggle.style';

import type { ToggleProps } from './types';

/**
 * A toggle button is a component that can switch between two states,
 * such as on and off, true and false, or selected and deselected
 */
export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ size = 'regular', isDisabled = false, isChecked: initialChecked = false, onChange, testId }, ref) => {
    const [isChecked, setIsChecked] = useState(initialChecked);

    const toggleChecked = () => {
      const newChecked = !isChecked;
      setIsChecked(newChecked);

      if (onChange) {
        onChange({ target: { checked: newChecked } } as ChangeEvent<HTMLInputElement>);
      }
    };

    const handleClick = () => {
      if (!isDisabled) toggleChecked();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
      if (event.key === KEY.SPACE && !isDisabled) {
        toggleChecked();
      }
    };

    useEffect(() => {
      setIsChecked(initialChecked);
    }, [initialChecked]);

    return (
      <Root
        tabIndex={isDisabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        size={size}
        role="switch"
        isChecked={isChecked}
        aria-checked={isChecked}
        isDisabled={isDisabled}
        testId={testId}
      >
        <Input
          testId={testId}
          tabIndex={-1}
          ref={ref}
          checked={isChecked}
          disabled={isDisabled}
          onChange={onChange}
          aria-hidden
        />
        <ToggleIcon
          testId={composeTestingPath(ToggleSelector.ICON_CHECK, testId)}
          type="editor-done"
          size={size === 'regular' ? 16 : 20}
        />
        <ToggleIcon
          testId={composeTestingPath(ToggleSelector.ICON_UNCHECK, testId)}
          type="editor-close"
          size={size === 'regular' ? 16 : 20}
        />
      </Root>
    );
  },
);

Toggle.displayName = 'Toggle';
