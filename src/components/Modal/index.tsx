import React from 'react';

import { Container } from './styles';

interface IProps {
  title: string;
  author: string[];
  pages: string;
  company: string;
  published: string;
  img: string;
  id: string;
  review: string;
  isbn10: string;
  isbn13: string;
  language: string;
}
export const Modal: React.FC<IProps> = ({
  title,
  author,
  pages,
  company,
  published,
  img,
  id,
  review,
}: IProps) => {
  return (
    <Container>
      <div></div>
    </Container>
  );
};
