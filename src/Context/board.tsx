import axios from 'axios';
import React, { useMemo, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface Context {
  handleOpenDialog: (id: string) => void;
  openDialog: boolean;
  books: {
    authors: string[];
    category: string;
    description: string;
    id: string;
    imageUrl: string;
    isbn10: string;
    isbn13: string;
    language: string;
    pageCount: string;
    published: string;
    publisher: string;
    title: string;
  };
}

const BoardContext = React.createContext<Context | undefined>(undefined);

const BoardProvider: React.FC = ({ children }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const token = localStorage.getItem('@APPNOZ:token');
  const [books, setBooks] = useState<any | null>();

  const handleOpenDialog = async (id: string) => {
    console.log(id);
    axios({
      method: 'get',
      baseURL: 'http://books.appnoz.com.br/api/v1',
      url: `/books/${id}`,
      headers: {
        authorization: 'Bearer ' + token,
      },
    }).then(response => {
      const { data } = response;
      setBooks(data);
    });

    // setOpenDialog(true);
  };

  const handleClose = useCallback(() => {
    setOpenDialog(false);
  }, [setOpenDialog, openDialog]);

  const defaultValue = useMemo(
    () => ({
      handleOpenDialog,
      openDialog,
      handleClose,
      setOpenDialog,
      books,
    }),
    [handleOpenDialog, openDialog, handleClose],
  );

  return (
    <BoardContext.Provider value={defaultValue}>
      {children}
    </BoardContext.Provider>
  );
};

function useBoard() {
  const context = useContext(BoardContext);
  if (context === undefined) {
    throw new Error(`useBoard deve ser usado em um BoardProvider`);
  }
  return context;
}

export { BoardProvider, useBoard };
