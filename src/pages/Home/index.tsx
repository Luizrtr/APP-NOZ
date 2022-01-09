import React from 'react';
import { useAuth } from '../../hooks/auth';

import noz from '../../assets/home/noz-black.png';
import log_out from '../../assets/home/logout.png';

import { Container } from './styles';
import { Card } from '../../components/Card';

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
      <div className="books">
        <Card
          title="Crossing the Chasm"
          author="Geoffrey A. Moore"
          pages="150 páginas"
          company="Editora Loyola"
          data="Publicado em 2020"
          img="https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg"
        />
        <Card
          title="Crossing the Chasm"
          author="Geoffrey A. Moore"
          pages="150 páginas"
          company="Editora Loyola"
          data="Publicado em 2020"
          img="https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg"
        />
        <Card
          title="Crossing the Chasm"
          author="Geoffrey A. Moore"
          pages="150 páginas"
          company="Editora Loyola"
          data="Publicado em 2020"
          img="https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg"
        />
        <Card
          title="Crossing the Chasm"
          author="Geoffrey A. Moore"
          pages="150 páginas"
          company="Editora Loyola"
          data="Publicado em 2020"
          img="https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg"
        />
      </div>
    </Container>
  );
};

export default App;
