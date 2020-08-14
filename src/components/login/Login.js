import React, { useEffect } from 'react';
import githubIcon from '../../asset/img/github.svg';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithGithub } from '../../store/auth';
import { Redirect } from 'react-router-dom';
import { Button, Avatar, Box } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const GithubButton = withStyles({
  root: {
    backgroundColor: 'black',
    border: 0,
    color: 'white',
    textAlign: 'right',
    fontFamily: 'Cafe24Oneprettynight',
    fontWeight: 900,
    fontSize: '1.3rem',
  },
})(Button);

const Container = withStyles({
  root: {
    paddingTop: '17%',
  },
})(Box)

function Login() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const submit = () => {
    dispatch(loginWithGithub());
  }

  return (
    user ? <Redirect to='/'/> :
    <Container component="main">
      <GithubButton
        variant="contained"
        startIcon={<Avatar src={githubIcon}/>}
        onClick={submit}>
        Sign Up With Github
      </GithubButton>
    </Container>
  )
}

export default Login;
