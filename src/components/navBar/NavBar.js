import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

const Header = withStyles({
  root: {
    backgroundColor: 'black',
    height: '64px',
  }
})(AppBar);

function NavBar() {
  return(
    <Header>
    </Header>
  )
}

export default NavBar;
