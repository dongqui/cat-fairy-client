import React, { useEffect } from 'react';
import './Login.css';
import fairy from '../../asset/img/pairFairy.png';
import { DefaultButton } from '../shared/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithGithub } from '../../store/auth';
import { Redirect } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const submit = () => {
    dispatch(loginWithGithub());
  }

  useEffect(() => {
    console.log(user);
  })
  return (
    user ? <Redirect to='/'/> :
    <main className="login-container">
      <section className="login-left login-base">
        <img className="img-fairy" src={fairy} />
      </section>
      <section className="login-right login-base">
        <div className="login-input-container">
          <DefaultButton text="로그인" variant="contained"  color="primary" fullWidth onClick={submit}/>
        </div>
      </section>
    </main>
  )
}



export default Login;
