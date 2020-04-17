import React from 'react';
import { Wrapper, Button } from './style';

function Login() {
  
  return (
    <Wrapper>
      <Button
        href="https://github.com/login/oauth/authorize?client_id=5c82987314849c415fa5&scope=user"
        rel="noopener noreferrer"
      >
        Login with Github
      </Button>
      <Button
        href="#"
      >
        뭐 하는 곳이지?
      </Button>
    </Wrapper>
  );
}

export default Login;


