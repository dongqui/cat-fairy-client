import React from 'react';
import './Login.css';
import fairy from '../../asset/img/pairFairy.png';
import { Link } from 'react-router-dom';
import { DefaultButton } from '../shared/Buttons';
import { useDispatch } from 'react-redux';
import { loginWithEmail } from '../../store/auth';
import { useInput } from '../../helper/hooks';

function Login() {

  const email= useInput('');
  const password = useInput('');

  const dispatch = useDispatch();

  const submit = () => {
    dispatch(loginWithEmail(email, password));
  }
  return (
    <main className="login-container">
      <section className="login-left login-base">
        <img className="img-fairy" src={fairy} />
        <p>개발자가 혼자 디자인하고,</p>
        <p>혼자 기획하고, </p>
        <p>혼자 개발하면 </p>
        <p>이렇게 된단다. </p>
        <p style={{marginTop: "50px"}}>팀을 구하자.</p>
      </section>
      <section className="login-right login-base">
        <div className="login-input-container">
          <form className="login-form">
            <h2>로그인</h2>
            <input {...email} className="login-input login-email" placeholder="ID"/>
            <input {...password} className="login-input login-password" placeholder="Password"/>
            <DefaultButton text="로그인" variant="contained"  color="primary" fullWidth onClick={submit}/>
          </form>
          <footer>
            <Link
              exact
              to={`/signUp`}>
              Sign up
            </Link>
          </footer>
        </div>
      </section>
    </main>
  )
}



export default Login;
