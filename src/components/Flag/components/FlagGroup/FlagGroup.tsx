import { FC, Children, ReactElement, isValidElement, cloneElement } from 'react';

import { Portal } from '@/components/Portal';

import { FlagProps } from '../Flag/types';

import { FlagWrapper, Root } from './FlagGroup.styles';

import type { FlagGroupProps } from './types';

export const FlagGroup: FC<FlagGroupProps> = ({ children }) => {
  return (
    <Portal wrapperId="jawekit-portal-flags">
      <Root>
        {Children.map(children, (child: ReactElement, index) => {
          if (isValidElement(child)) {
            return (
              <FlagWrapper key={index}>
                {cloneElement(child, {
                  fullWidth: true,
                  isDismissible: true,
                } as Partial<FlagProps>)}
              </FlagWrapper>
            );
          }
          return null;
        })}
      </Root>
    </Portal>
  );
};

FlagGroup.displayName = 'FlagGroup';
