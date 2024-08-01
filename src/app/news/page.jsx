'use client';
import React, { useEffect, useState } from 'react';
import TinTucCard from '../components/tintuc';
import { setLanguage } from '../components/index';
import styles from './style.css';

export default function NewsPage() {
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState('vi');
  const [keyword, setKeyword] = useState('');
  const [loai, setLoai] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

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

  const handleSearch = async (e) => {
    e.preventDefault();

    let url = `http://localhost:3000/tintucs/search?`;

    if (keyword.trim() !== '') {
      url += `keyword=${keyword}&`;
    }

    if (loai) {
      url += `loai=${loai}&`;
    }

    if (startDate && endDate) {
      url += `startDate=${startDate}&endDate=${endDate}&`;
    }

    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  return (
    <div>
      <div className='seach-news'>
        <div className="seach-form">
          <h1 className='News'>News</h1>
          <form className="d-flex" onSubmit={handleSearch}>
            <button className="btn btn-outline-primary" type="submit">
              <img src="../img/icon/search.png" alt="" />
            </button>
            <input
              className="form-control me-2"
              name="keyword"
              placeholder="Nhập Nội Dung Cần Tìm"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className='boloc'>
        <form className="search-loc" onSubmit={handleSearch}>
          <select
            className="form-control me-2"
            name="loai"
            value={loai}
            onChange={(e) => setLoai(e.target.value)}
          >
            <option value="">Chọn loại</option>
            <option value="0">Tin thường</option>
            <option value="1">Event</option>
          </select>
          <div className="date-filter">
            <label htmlFor="startDate">Ngày bắt đầu</label>
            <input
              type="date"
              className="form-control me-2"
              name="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="date-filter">
            <label htmlFor="endDate">Ngày kết thúc</label>
            <input
              type="date"
              className="form-control me-2"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <button className="btn btn-outline-primary" type="submit">
            Tìm
          </button>
        </form>
      </div>
      <div className="container my-3">
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
