import { isString } from 'lodash';
import { FC, useEffect, useRef, useState } from 'react';

import { Icon } from '@/icons';

import { FlagAction } from '../FlagAction';
import { FlagActions } from '../FlagActions';
import { FlagContent } from '../FlagContent';

import { IconMap } from './constants';
import { ButtonIcon, ExpandedArea, FlagHeader, FlagTitle, Root, Wrapper } from './Flag.styles';

import type { FlagProps } from './types';

const FlagComponent: FC<FlagProps> = ({ icon, children, title, testId, fullWidth = false, appearance = 'success' }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [maxHeight, setMaxHeight] = useState<number | 'max-height'>('max-height');
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleExpend = () => {
    setIsExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <Root appearance={appearance} testId={testId} fullWidth={fullWidth}>
      {!isString(icon) ? <Icon type={IconMap[appearance]} size={24} /> : icon}
      <Wrapper>
        <FlagHeader>
          {title && <FlagTitle>{title}</FlagTitle>}
          <ButtonIcon isExpanded={isExpanded} onClick={handleExpend}>
            <Icon type="chevron-down" size={32} />
          </ButtonIcon>
        </FlagHeader>
        <ExpandedArea aria-expanded={isExpanded} ref={contentRef} isExpanded={isExpanded} maxHeight={maxHeight}>
          {children}
        </ExpandedArea>
      </Wrapper>
    </Root>
  );
};

FlagComponent.displayName = 'Flag';

export const Flag = Object.assign(FlagComponent, {
  Action: FlagAction,
  Actions: FlagActions,
  Content: FlagContent,
});
