import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import AppTest from './AppTest/TodoApp'

ReactDOM.render(
   <React.StrictMode>
   {/* <AppTest/> */}
   <App />
  </React.StrictMode>, 
  document.getElementById('root')
);

