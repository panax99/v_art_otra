import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Head from './Head';
import Menu from './Menu';
import Article_liste from './article';


/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

const Entete = ReactDOM.createRoot(document.getElementById('Header'))
Entete.render(
  <React.Fragment>
    <Head/>
  </React.Fragment>
)

const Menu_bar = ReactDOM.createRoot(document.getElementById('Menu'))
Menu_bar.render(
  <React.Fragment>
    <Menu/>
  </React.Fragment>
)

const list_article = ReactDOM.createRoot(document.getElementById('Article'))
list_article.render(
  <React.Fragment>
    <Article_liste/>
  </React.Fragment>
) 



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
