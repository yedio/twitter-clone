import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { authService } from '../configFirebase';
import { isLoginedAtom } from '../state/Atom';

export default function Header() {
  const [isLogined, setIsLogined] = useRecoilState(isLoginedAtom);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const result = await authService.signOut();
      setIsLogined(false);
      navigate('/');
    } catch (error) {
      console.log('signOut.error', error);
    }
  };

  return (
    <Wrap>
      <Logo>🍋</Logo>
      <WalletWrap>
        {isLogined ? (
          <Logout onClick={logout}>Logout</Logout>
        ) : (
          <Login type="button" onClick={() => navigate('/auth')}>
            LOGIN
          </Login>
        )}
      </WalletWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 64px;
  background-color: navy;
`;

const Logo = styled.div`
  font-size: 30px;
`;

const Btn = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #f48805;
  color: white;
`;

const Login = styled(Btn)`
  background-color: #f48805;
  color: white;
`;

const WalletWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const Logout = styled(Btn)`
  background-color: #fff;
  color: #f48805;
`;
