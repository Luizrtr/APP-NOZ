import React from 'react';
import { useForm } from 'react-hook-form';

import { Container } from './styles';
import app from '../../assets/login/app.png';
import noz from '../../assets/login/noz.png';
import { useAuth } from '../../hooks/auth';

interface ILogin {
  email: string;
  password: string;
}
export const Login: React.FC = () => {
  document.body.style.backgroundImage = `url(${app})`;
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed';

  const { register, handleSubmit } = useForm();
  const { signIn, error } = useAuth();

  const onSubmit = async (inputData: ILogin) => {
    await signIn({ email: inputData.email, password: inputData.password });
  };

  return (
    <Container>
      <div>
        <div className="header">
          <img src={noz} alt="" />
          <h2>Books</h2>
        </div>
        <div className="forms">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputs">
              <input
                id="email"
                type="text"
                {...register('email', { required: true })}
              />
              <label>Email</label>
            </div>
            <div className="inputs">
              <input
                id="password"
                type="password"
                {...register('password', { required: true })}
              />
              <label>Senha</label>
              <button type="submit">Entrar</button>
            </div>
          </form>
        </div>
        {error && (
          <div className="error">
            <p>Email e/ou senha incorretos.</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Login;
