import React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';

type ButtonProps = {
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ onClick }): React.ReactElement => {
  return <PrimaryButton role='button' text='Add post' onClick={onClick} />;
};
