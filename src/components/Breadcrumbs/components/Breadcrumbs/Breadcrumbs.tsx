import { MouseEvent, Children, cloneElement, FC, useState } from 'react';

import { ExpandButton } from '../ExpandButton';

import { List, ListItem, Navigation } from './Breadcrumbs.styles';

import type { BreadcrumbsProps } from '../../types';

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  children,
  onExpand,
  isExpanded: controlledExpanse,
  maxItems = 8,
  visibleBeforeCollapse = 3,
  visibleAfterCollapse = 2,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(
    typeof controlledExpanse === 'undefined' ? false : controlledExpanse,
  );

  const handleExpand = (event: MouseEvent<Element>) => {
    if (typeof controlledExpanse !== 'undefined') setIsExpanded(false);

    onExpand?.(event);
  };

  const breadcrumbsArray = Children.map(Children.toArray(children), (child, index) => {
    const item = <ListItem key={index}>{child}</ListItem>;

    return Children.toArray(children).length - 1 === index ? cloneElement(item) : item;
  });

  const renderBreadcrumbs = () => {
    const itemsBefore = breadcrumbsArray.slice(0, visibleBeforeCollapse);
    const itemsAfter = breadcrumbsArray.slice(breadcrumbsArray.length - visibleAfterCollapse, breadcrumbsArray.length);

    return [
      ...itemsBefore,
      <ListItem key="ellipsis">
        <ExpandButton onClick={handleExpand} />
      </ListItem>,
      ...itemsAfter,
    ];
  };

  return (
    <Navigation>
      <List>{isExpanded ? renderBreadcrumbs() : breadcrumbsArray}</List>
    </Navigation>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';
