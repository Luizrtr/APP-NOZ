import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useAuth } from '../../hooks/auth';

import noz from '../../assets/home/noz-black.png';
import log_out from '../../assets/home/logout.png';
import prev from '../../assets/home/Prev.png';
import Next from '../../assets/home/Next.png';

import { Container } from './styles';
import { Card } from '../../components/Card';
import { BoardProvider } from '../../Context/board';

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
  const [pages, setPages] = useState<number>(1);
  const [check, setCheck] = useState(false);
  const token = localStorage.getItem('@APPNOZ:token');

  const fetchBooks = async (page: number, amount: number, category: string) => {
    setPages(page);
    axios({
      method: 'get',
      baseURL: 'http://books.appnoz.com.br/api/v1',
      url: `/books?page=${page}&amount=${amount}&category=${category}`,
      headers: {
        authorization: 'Bearer ' + token,
      },
    }).then(response => {
      const { data } = response;
      if (data.data) {
        setBooks(data.data);
      }
      if (data.data.length < 12) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    });
  };

  const handleNewPage = async () => {
    fetchBooks(pages + 1, 12, 'biographies');
  };

  const handlePreviousPage = async () => {
    if (pages === 1) {
      fetchBooks(pages, 12, 'biographies');
    } else {
      fetchBooks(pages - 1, 12, 'biographies');
    }
  };
  useEffect(() => {
    fetchBooks(pages, 12, 'biographies');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BoardProvider>
      <Container>
        <div className="header">
          <div className="fistContent">
            <img alt="noz" src={noz} />
            <h2>Books</h2>
          </div>
          <div className="lastContent">
            <p>Bem vindo, {user?.name}!</p>
            <button onClick={signOut}>
              <img src={log_out} alt="" />
            </button>
          </div>
        </div>
        <div className="grid">
          <div className="books">
            {books &&
              books.map(b => (
                <Card
                  id={b.id}
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
          <div className="pagination">
            <button onClick={handlePreviousPage}>
              <img src={prev} alt="prev" className="mobile" />
            </button>
            <p>Página {pages} de 100</p>
            <div>
              <button onClick={handlePreviousPage}>
                <img src={prev} alt="prev" className="full" />
              </button>
              {!check && (
                <button onClick={handleNewPage}>
                  <img src={Next} alt="Next" />
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </BoardProvider>
  );
};

export default App;
