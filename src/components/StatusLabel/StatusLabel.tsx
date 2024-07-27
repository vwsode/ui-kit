import React, { FC } from 'react';

import { Icon, IconVariant } from '../../icons';
import { composeTestingPath } from '../../utils';
import { Text } from '../Text';

import { StatusLabelSelector } from './constants';
import { StyledStatusLabel } from './StatusLabel.style';
import { StatusLabelProps } from './types';

const statusLabelIconMap: Record<Exclude<StatusLabelProps['type'], 'info'>, IconVariant> = {
  critical: 'warning',
  error: 'warning',
  warning: 'error-circle',
  success: 'checkrmark-circle',
};

export const StatusLabel: FC<StatusLabelProps> = ({ title, type, icon, testId }) => {
  return (
    <StyledStatusLabel type={type} testId={testId}>
      {icon
        ? icon
        : type !== 'info' && (
            <Icon
              testId={composeTestingPath(StatusLabelSelector.STATUS_LABEL_ICON, type)}
              size={16}
              type={statusLabelIconMap[type]}
            />
          )}
      <Text type="caption" accent="primary" color="inherit" testId={StatusLabelSelector.STATUS_LABEL}>
        {title}
      </Text>
    </StyledStatusLabel>
  );
};

StatusLabel.displayName = 'StatusLabel';
