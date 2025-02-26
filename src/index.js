import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import NetflixIndexComponent from './Components/NetflixIndexComponent';
import { CookiesProvider } from 'react-cookie';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import CustomHookDemo from './Components/CustomHookDemo';
import JQueryAjaxDemo from './Components/JQueryAjaxDemo';
import UserLogin from './Components/UserLogin';
import AxiosDemo from './Components/AxiosDemo';
import ShoppingIndex from './shopping/ShoppingIndex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingIndex/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
