import React from 'react';
import { Container } from './styles';

interface IProps {
  title: string;
  author: string[];
  pages: string;
  company: string;
  data: string;
  img: string;
}
export const Card: React.FC<IProps> = ({
  title,
  author,
  pages,
  company,
  data,
  img,
}: IProps) => {
  return (
    <Container>
      <div className="tools">
        <div className="imgContent">
          <img src={img} />
        </div>
        <div className="content">
          <strong>{title}</strong>
          {author.map(a => (
            <h3>{a}</h3>
          ))}
          <div>
            <p>{pages} Páginas</p>
            <p>Editora {company}</p>
            <p>Publicado em {data}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
