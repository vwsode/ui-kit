import { isString, noop } from 'lodash';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Icon } from '@/icons';
import { Duration } from '@/themes';

import { FlagAction } from '../FlagAction';
import { FlagActions } from '../FlagActions';
import { FlagContent } from '../FlagContent';

import { IconMap } from './constants';
import { ButtonIcon, ExpandedArea, FlagHeader, FlagTitle, Root, Wrapper } from './Flag.styles';

import type { FlagProps } from './types';

const FlagComponent: FC<FlagProps> = ({
  icon,
  children,
  title,
  testId,
  id,
  onDismissed = noop,
  isDismissible = false,
  fullWidth = false,
  appearance = 'success',
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [isChildrenDisplayed, setIsChildrenDisplayed] = useState(isExpanded);
  const [maxHeight, setMaxHeight] = useState<number | 'max-height'>('max-height');
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleDismissed = useCallback(() => {
    onDismissed(id);
  }, [onDismissed, id]);

  const handleExpand = () => {
    const newExpandedState = !isExpanded;

    if (newExpandedState) {
      setIsChildrenDisplayed(true);
      setMaxHeight(maxHeight);
    } else {
      setTimeout(() => {
        setIsChildrenDisplayed(false);
      }, Duration.Default);
      setMaxHeight(0);
    }

    setIsExpanded(newExpandedState);
  };

  useEffect(() => {
    if (isChildrenDisplayed && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, [isChildrenDisplayed]);

  return (
    <Root appearance={appearance} testId={testId} fullWidth={fullWidth} role="alert">
      {!isString(icon) ? <Icon type={IconMap[appearance]} size={24} /> : icon}
      <Wrapper>
        <FlagHeader>
          {title && <FlagTitle>{title}</FlagTitle>}
          {!isDismissible ? (
            <ButtonIcon isExpanded={isExpanded} onClick={handleExpand}>
              <Icon type="chevron-down" size={32} />
            </ButtonIcon>
          ) : (
            <ButtonIcon onClick={handleDismissed}>
              <Icon type="editor-close" size={32} />
            </ButtonIcon>
          )}
        </FlagHeader>
        {isChildrenDisplayed && (
          <ExpandedArea aria-expanded={isExpanded} ref={contentRef} isExpanded={isExpanded} maxHeight={maxHeight}>
            {children}
          </ExpandedArea>
        )}
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
