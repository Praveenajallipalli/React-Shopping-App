import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import NetflixIndexComponent from './Components/NetflixIndexComponent';
import { CookiesProvider } from 'react-cookie';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import TwoWayClass from './Components/TwoWayClass';
import ShoppingComponent from './Components/ShoppingComponent';
import ShoppingClassComponent from './Components/ShoppingClassComponent';
import LoginComponent from './Components/LoginComponent';
import FormCOmponent from './Components/FormComponent';
import FormikDemo from './Components/FormikDemo';
import FormikValidation from './Components/FormikValidation';
import YupValidation from './Components/YupValidation';
import YupValidationComponent from './Components/YupValidationComponent';
import LifeCycleDemo from './Components/LifeCycleDemo';
import ReactHookDemo from './Components/ReactHookDemo';
import ContextDemo from './Components/ContextDemo';
import UserLogin from './Components/UserLogin';
import ReducerDemo from './Components/ReducerDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReducerDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
