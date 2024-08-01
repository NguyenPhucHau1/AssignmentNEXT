'use client';
import React, { useEffect, useState } from 'react';
import TinTucCard from '../components/highlighevent';
import { setLanguage } from '../components/index';
import styles from './style.css';

export default function NewsPage() {
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState('vi');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'vi';
    setLanguage(savedLanguage);
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch('http://localhost:3000/tintucs', { revalidate: 0 });
    const data = await res.json();
    setData(data);
  };

  return (
    <div>
      <div className='seach-news'>
        <div className="seach-form">
          <h1 className='News'>Highlighed Event</h1>
          <img src="../img/group52.png" alt="" />
        </div>
      </div>
      <div className="container my-3 highlighevent">
        <div className="row">
          {data.length > 0 ? (
            <TinTucCard data={data} language={language} />
          ) : (
            <div className="col-12 no-search">
              <h1 className="text-center">Tin tức không tồn tại</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
