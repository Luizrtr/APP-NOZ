import React from 'react';
import { Container } from './styles';

interface IProps {
  title: string;
  author: string;
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
          <h3>{author}</h3>
          <div>
            <p>{pages}</p>
            <p>{company}</p>
            <p>{data}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
