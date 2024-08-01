"use client";
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import Register from '../components/register';
import styles from './styles.css';

const RegisterPage = () => {
  return (
    <Provider store={store}>
      <div className="register">
        <Register />
      </div>
    </Provider>
  );
};

export default RegisterPage;
