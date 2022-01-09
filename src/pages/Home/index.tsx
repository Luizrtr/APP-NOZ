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
  authors: string;
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
  const [books, setBooks] = useState<IBooks>();
  const token = localStorage.getItem('@APPNOZ:token');

  const fetchBooks = async (page: number, amount: number) => {
    const category = 'biographies';
    const sendData = {
      page,
      amount,
      category: 'biographies',
    };
    // await api
    //   .get(`/books`, { page, amount, category: 'biographies' })
    //   .then(response => {
    //     const { data } = response;
    //     console.log(data);
    //   });

    axios({
      method: 'get',
      baseURL: 'http://books.appnoz.com.br/api/v1',
      url: `/books?page=${page}&amount=${amount}&category=biographies`,
      headers: {
        authorization: `${token}`,
      },
      auth: {
        username: 'esafio@appnoz.com.br',
        password: '12341234',
      },
    }).then(response => {
      const { data } = response;
      console.log(response);
    });
  };
  fetchBooks(1, 25);
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
