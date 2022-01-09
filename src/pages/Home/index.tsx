import React from 'react';
import { useAuth } from '../../hooks/auth';

import noz from '../../assets/home/noz-black.png';
import log_out from '../../assets/home/logout.png';

import { Container } from './styles';

export const App: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <div className="header">
        <div className="fistContent">
          <img src={noz} />
          <h2>Books</h2>
        </div>
        <div className="lastContent">
          <p>Bem vindo, {user?.name}!</p>
          <button onClick={signOut}>
            <img src={log_out} alt="" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default App;
