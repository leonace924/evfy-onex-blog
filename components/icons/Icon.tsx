import React from 'react';
import * as IconList from './index';
import { IconEnum } from '@/components/icons/icon-enum';

type Props = {
  className?: string;
  icon: IconEnum;
  onClick?: () => void;
};

export const Icon = ({ icon, className, onClick }: Props) => {
  const IconComponent = IconList[icon as keyof typeof IconList];
  if (!IconComponent) return null;

  return <IconComponent className={className || ''} onClick={onClick} />;
};

export default Icon;
