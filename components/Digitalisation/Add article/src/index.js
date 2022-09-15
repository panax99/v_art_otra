import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Head from './Head';
import Div_Left from './Div_Left';
import Div_Right from './Div_Right';
/*import App from './App';*/
import reportWebVitals from './reportWebVitals';



const Entete = ReactDOM.createRoot(document.getElementById('head'))
Entete.render(
  <React.Fragment>
    <Head/>
  </React.Fragment>
)

const Left = ReactDOM.createRoot(document.getElementById('Left'))
Left.render(
  <React.Fragment>
    <Div_Left/>
  </React.Fragment>
)

const Right = ReactDOM.createRoot(document.getElementById('Right'))
Right.render(
  <React.Fragment>
    <Div_Right/>
  </React.Fragment>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
