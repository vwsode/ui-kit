import { useState } from 'react';
import { usePopper } from 'react-popper';

import { StyledTooltip } from './Tooltip.styles';
import { TooltipProps } from './types';

export const Tooltip = ({ placement = 'bottom', content, referenceElement }: TooltipProps) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
  });

  return (
    <StyledTooltip ref={setPopperElement} style={styles.popper} {...attributes.popper}>
      {content}
    </StyledTooltip>
  );
};

Tooltip.displayName = 'Tooltip';
