import * as React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';

export interface ButtonProps {
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return <PrimaryButton text='Add post' onClick={onClick} />;
};
