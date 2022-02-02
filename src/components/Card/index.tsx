import React from 'react';
import { useBoard } from '../../Context/board';
import { Container } from './styles';

interface IProps {
  title: string;
  author: string[];
  pages: string;
  company: string;
  data: string;
  img: string;
  id: string;
}
export const Card: React.FC<IProps> = ({
  title,
  author,
  pages,
  company,
  data,
  img,
  id,
}: IProps) => {
  const authorFinal = [];
  const { handleOpenDialog } = useBoard();

  if (author.length > 1) {
    for (let i = 0; i < 2; i++) {
      authorFinal.push(author[i]);
    }
  }

  return (
    <button
      onClick={() => {
        handleOpenDialog(id);
      }}
    >
      <Container>
        <div className="tools">
          <div className="imgContent">
            <img alt="capa" src={img} />
          </div>
          <div className="content">
            <div>
              <strong>{title}</strong>
              {authorFinal.map(a => (
                <h3>{a}</h3>
              ))}
            </div>
            <div>
              <p>{pages} Páginas</p>
              <p>Editora {LimitSentence(company, 10)}</p>
              <p>Publicado em {data}</p>
            </div>
          </div>
        </div>
      </Container>
    </button>
  );
};

const LimitSentence = (phrases: string, length: number) => {
  if (phrases.length >= length) {
    const sentence = `${phrases.substring(0, length)}...`;
    return sentence;
  }
  return phrases;
};
