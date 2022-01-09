import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from 'twin.macro';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppProvider from './hooks';
import Routes from './routes';

import StylesBase from './styles/global';

const App: React.FC = () => {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AppProvider>
        <Routes />
      </AppProvider>
      <StylesBase />
      <GlobalStyles />
    </Router>
  );
};

export default App;
