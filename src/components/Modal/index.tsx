import React from 'react';

import { Container } from './styles';

interface IProps {
  authors: string[];
  category: string;
  description: string;
  id: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pageCount: number;
  published: string;
  publisher: number;
  title: string;
  open: boolean;
  onClose?: {
    bivarianceHack(event: {}, reason: 'backdropClick' | 'escapeKeyDown'): void;
  }['bivarianceHack'];
}
export const Modal: React.FC<IProps> = ({
  authors,
  category,
  description,
  id,
  imageUrl,
  isbn10,
  isbn13,
  language,
  pageCount,
  published,
  publisher,
  title,
}: IProps) => {
  return (
    <Container>
      <div></div>
    </Container>
  );
};

export const handleOpenModal: React.FC<IProps> = ({
  authors,
  category,
  description,
  id,
  imageUrl,
  isbn10,
  isbn13,
  language,
  pageCount,
  published,
  publisher,
  title,
  open,
  onClose,
}: IProps) => {
  return (
    <Modal
      authors={authors}
      category={category}
      description={description}
      id={id}
      imageUrl={imageUrl}
      isbn10={isbn10}
      isbn13={isbn13}
      language={language}
      pageCount={pageCount}
      published={published}
      publisher={publisher}
      title={title}
      open={open}
      onClose={onClose}
    ></Modal>
  );
};
  
