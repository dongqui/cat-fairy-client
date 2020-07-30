import React from 'react';
import { useInput } from "../../helper/hooks";
import { signUpWithEmail } from "../../store/auth";
import { useDispatch } from "react-redux";
import './SignUp.css';
import { TextField, Container } from '@material-ui/core';
import { DefaultButton } from "../shared/Buttons";

function SignUp() {
  const email = useInput('');
  const password = useInput('');
  const passwordToConfirm = useInput('');
  const dispatch = useDispatch();

  const submit = (e) => {
    dispatch(signUpWithEmail(email.value, password.value ));
  }

  return (
    <Container maxWidth="sm">
      <form className="sign-up-form" onSubmit={submit}>
        <TextField {...email} className="sign-up-input" fullWidth label="ID" type="text" variant="outlined"/>
        <TextField {...password} className="sign-up-input" fullWidth label="Password" type="password" variant="outlined"/>
        <TextField {...passwordToConfirm}
                   className="sign-up-input" fullWidth label="Password" type="password" variant="outlined"/>
        <DefaultButton fullWidth text="회원 가입" variant="contained" color="primary" onClick={submit}/>
      </form>
    </Container>
  )
}

export default SignUp;
