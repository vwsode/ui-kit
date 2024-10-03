import { Children, cloneElement, FC, MouseEvent, useEffect, useState } from 'react';

import { BreadcrumbsItem } from '../BreadcrumbsItem';
import { ExpandButton } from '../ExpandButton';

import { List, ListItem, Navigation } from './Breadcrumbs.styles';

import type { BreadcrumbsProps } from '../../types';

const BreadcrumbsComponent: FC<BreadcrumbsProps> = ({
  children,
  onExpand,
  isExpanded: controlledExpanse,
  visibleBeforeCollapse = 3,
  visibleAfterCollapse = 2,
}) => {
  const [isExpandedInternal, setIsExpandedInternal] = useState<boolean>(controlledExpanse ?? false);

  const isControlled = typeof controlledExpanse !== 'undefined';
  const isExpanded = isControlled ? controlledExpanse : isExpandedInternal;

  const handleExpand = (event: MouseEvent<Element>) => {
    if (!isControlled) {
      setIsExpandedInternal(true);
    }

    onExpand?.(event);
  };

  const breadcrumbsArray = Children.map(Children.toArray(children), (child, index) => {
    const item = <ListItem key={index}>{child}</ListItem>;

    return Children.toArray(children).length - 1 === index ? cloneElement(item) : item;
  });

  const renderBreadcrumbsWithEllipsis = () => {
    if (visibleBeforeCollapse + visibleAfterCollapse >= breadcrumbsArray.length) {
      return breadcrumbsArray;
    }
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

  useEffect(() => {
    if (isControlled) {
      setIsExpandedInternal(controlledExpanse);
    }
  }, [controlledExpanse, isControlled]);

  return (
    <Navigation aria-expanded={isExpanded}>
      <List>{!isExpanded ? renderBreadcrumbsWithEllipsis() : breadcrumbsArray}</List>
    </Navigation>
  );
};

BreadcrumbsComponent.displayName = 'Breadcrumbs';

export const Breadcrumbs = Object.assign(BreadcrumbsComponent, {
  Item: BreadcrumbsItem,
});
