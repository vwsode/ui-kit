import { FC, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { createWrapperAndAppendToBody } from './helpers/createWrapperAndAppendToBody';
import { PortalProps } from './types';

export const Portal: FC<PortalProps> = ({ children, wrapperId = 'jawekit-portal', zIndex }) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

Portal.displayName = 'Portal';
