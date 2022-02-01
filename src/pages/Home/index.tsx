import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useAuth } from '../../hooks/auth';

import noz from '../../assets/home/noz-black.png';
import log_out from '../../assets/home/logout.png';

import { Container } from './styles';
import { Card } from '../../components/Card';
import api from '../../services/api';

interface IBooks {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
}

export const App: React.FC = () => {
  const { user, signOut } = useAuth();
  const [books, setBooks] = useState<IBooks[]>();
  const token = localStorage.getItem('@APPNOZ:token');

  const fetchBooks = async (page: number, amount: number, category: string) => {
    axios({
      method: 'get',
      baseURL: 'http://books.appnoz.com.br/api/v1',
      url: `/books?page=${page}&amount=${amount}&category=${category}`,
      headers: {
        authorization: 'Bearer ' + token,
      },
    }).then(response => {
      const { data } = response;
      if (data) {
        console.log(data.data);
        setBooks(data.data);
      }
    });
  };

  useEffect(() => {
    fetchBooks(1, 25, 'biographies');
  }, []);

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
        {books &&
          books.map(b => (
            <Card
              key={b.id}
              title={b.title}
              author={b.authors}
              pages={b.pageCount.toString()}
              company={b.publisher}
              data={b.published.toString()}
              img={b.imageUrl}
            />
          ))}
      </div>
    </Container>
  );
};

export default App;
