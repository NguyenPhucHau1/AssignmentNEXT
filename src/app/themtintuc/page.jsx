"use client"
import React from 'react';
import TintucForm from '../components/tintucfrom';
import styles from './style.css';
const AddTintucPage = () => {
  return (
    <div className='container col-6 kc'>
      <h1>Thêm Tin Tức</h1>
      <TintucForm />
    </div>
  );
};

export default AddTintucPage;