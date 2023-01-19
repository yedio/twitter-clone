import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { authService, firebaseInstance } from '../../configFirebase';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [newAccount, setNewAccount] = useState(true);

  const navigate = useNavigate();

  const onChange = (e: any) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const getLoginInfo = async (provider: any) => {
    try {
      const result = await authService.signInWithPopup(provider);
      if (result) {
        navigate('/');
      }
    } catch (error) {
      console.log('social-login-error', error);
    }
  };

  const onSocialClick = async (e: any) => {
    const {
      target: { name },
    } = e;

    let provider;

    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
      getLoginInfo(provider);
    } else if (name === 'gibhub') {
      provider = new firebaseInstance.auth.GithubAuthProvider();
      getLoginInfo(provider);
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      let data;
      if (!newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      navigate('/');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <LoginWrap>
        <Title>Email로 {newAccount ? '회원가입' : '로그인'}</Title>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
          />
          <input type="submit" name="create" value="Create Account" />
          <input type="submit" name="login" value="Log In" />
          <ErrorMsg>{error}</ErrorMsg>
        </form>
      </LoginWrap>
      <LoginWrap>
        <Title>소셜로 {newAccount ? '회원가입' : '로그인'}</Title>
        <SocialBtnWrap>
          <button name="google" onClick={onSocialClick}>
            Google
          </button>
          <button name="github" onClick={onSocialClick}>
            Github
          </button>
        </SocialBtnWrap>
      </LoginWrap>

      {!newAccount ? (
        <p>
          계정이 없으십니까?
          <ChangeAuth onClick={() => setNewAccount(prev => !prev)}>
            회원가입 하러가기
          </ChangeAuth>
        </p>
      ) : (
        <p>
          계정이 있으십니까?
          <ChangeAuth onClick={() => setNewAccount(prev => !prev)}>
            로그인 하러가기
          </ChangeAuth>
        </p>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SocialBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  button {
    width: 200px;
    height: 30px;
    border: 1px solid black;
  }
`;

const ErrorMsg = styled.span`
  color: red;
`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

const ChangeAuth = styled.span`
  color: blue;
  text-decoration: underline;
`;
