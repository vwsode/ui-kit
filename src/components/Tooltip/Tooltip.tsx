import { cloneElement, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

import { StyledTooltip } from './Tooltip.styles';
import { TooltipProps } from './types';

export const Tooltip = ({
  placement = 'bottom',
  content,
  children,
  isOpen,
  onClose,
  onOpen,
  truncate = false,
  initialOpen = false,
  testId,
}: TooltipProps) => {
  const isControlledTooltip = typeof isOpen !== 'undefined';
  const [visible, setVisible] = useState(isControlledTooltip ? isOpen : initialOpen);
  const referenceRef = useRef<HTMLElement | null>(null);
  const popperRef = useRef<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

  const { styles, attributes, update } = usePopper(referenceRef.current, popperElement, {
    placement,
  });

  useEffect(() => {
    if (update) {
      update();
    }
  }, [update, visible]);

  const handleMouseEnter = () => {
    setVisible(true);

    onOpen?.();
  };

  const handleMouseLeave = () => {
    setVisible(false);

    onClose?.();
  };

  return (
    <>
      {cloneElement(children, {
        ref: referenceRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      })}

      {isControlledTooltip
        ? isOpen
        : visible &&
          createPortal(
            <StyledTooltip
              truncate={truncate}
              testId={testId}
              ref={(node) => {
                setPopperElement(node);
                popperRef.current = node;
              }}
              style={styles.popper}
              {...attributes.popper}
            >
              {content}
            </StyledTooltip>,
            document.body,
          )}
    </>
  );
};

Tooltip.displayName = 'Tooltip';
