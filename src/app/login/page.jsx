"use client";
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import Login from '../components/login';
import styles from './style.css';

const LoginPage = () => {
  return (
    <Provider store={store}>
      <div className="login">
        <Login />
      </div>
    </Provider>
  );
};

export default LoginPage;
