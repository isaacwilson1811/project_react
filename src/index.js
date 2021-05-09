import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './globalContext';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
// import { BlogContext, BlogContextProvider } from './utils/localData';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
          <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);