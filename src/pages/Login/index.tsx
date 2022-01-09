import React from 'react';

import { Container } from './styles';
import app from '../../assets/login/app.png';
import noz from '../../assets/login/noz.png';

export const Login: React.FC = () => {
  document.body.style.backgroundImage = `url(${app})`;
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed';
  return (
    <Container>
      <div>
        <div className="header">
          <img src={noz} alt="" />
          <h2>Books</h2>
        </div>
        <div className="forms">
          <form action="">
            <div>
              <input id="email" type="text" />
              <label>Email</label>
            </div>
            <div>
              <input id="password" type="password" />
              <label>Senha</label>
              <button>Entrar</button>
            </div>
          </form>
        </div>
        {/* <div className="vetor" /> */}
        <div className="error">
          <p>Email e/ou senha incorretos.</p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
