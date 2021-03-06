import React from 'react';
import ReactDOM from 'react-dom';
import './styles/fonts.css';
import './index.css';
import './styles/navbar.css';
import './styles/home.css';
import './styles/characters.css';
import './styles/locations.css';
import './styles/episodes.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
