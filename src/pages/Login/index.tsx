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
        <div>
          <img src={noz} alt="" />
          <h2>Books</h2>
        </div>
        <div>
          <form action="">
            <div>
              <input id="email" type="text" />
              <label>Email Address</label>
            </div>
            <div>
              <input id="password" type="password" />
              <label>Password</label>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
