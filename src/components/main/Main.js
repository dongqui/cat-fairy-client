import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import background from '../../asset/img/배경.png'

const useStyles = makeStyles({
  root: {
    background: `url(${background}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    margin: '0 auto',
  },
});
function Main() {
  const classes = useStyles();
  return(
    <div className={classes.root}>

    </div>
  )
}

export default Main;
