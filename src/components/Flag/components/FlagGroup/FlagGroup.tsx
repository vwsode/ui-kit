import { FC, Children, ReactElement, isValidElement, cloneElement, memo } from 'react';

import { Portal } from '@/components/Portal';

import { FlagProps } from '../Flag/types';

import { FlagWrapper, Root } from './FlagGroup.styles';

import type { FlagGroupProps } from './types';

export const FlagGroup: FC<FlagGroupProps> = memo(({ children }) => {
  return (
    <Portal wrapperId="jawekit-portal-flags">
      <Root>
        {Children.map(children as ReactElement<FlagProps>, (child: ReactElement<FlagProps>, index) => {
          if (isValidElement(child)) {
            return (
              <FlagWrapper key={index} id={child.props.id}>
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
});

FlagGroup.displayName = 'FlagGroup';
