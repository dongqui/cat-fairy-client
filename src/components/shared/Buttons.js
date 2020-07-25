import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import React from 'react';

export function DefaultButton(props) {
  const { text, variant, color, size, fullWidth, onClick } = props;
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}
