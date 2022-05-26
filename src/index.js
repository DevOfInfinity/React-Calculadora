import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator';
import MyName from './main/MyName'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Calculator />
    <h2>{MyName}</h2>
  </>
);
