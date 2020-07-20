import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  btnBase: {
    width: '80%',
  },
});

export function DefaultButton(props) {
  const { text, variant, color, size, fullWidth } = props;
  const { btnBase } = useStyles();
  return (
    <Button
      classes={{
        btnBase
      }}
      variant={variant}
      color={color}
      size={size}
    >
      {text}
    </Button>
  )
}
