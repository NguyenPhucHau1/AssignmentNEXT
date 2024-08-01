"use client";
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import TinTucKhac from '../../components/showtin/TinTucKhac';
import TinTucDetail from '../../components/showtin/TinTucDetail';
import styles from './styles.css';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ShowTinTucPage({ params }) {
  const [language, setLanguage] = useState('vi');
  const { id } = params;

  const { data: tintuc, error: detailError, isLoading: detailLoading } = useSWR(`http://localhost:3000/tintucs/${id}`, fetcher);
  const { data: allTintucs, error: allError, isLoading: allLoading } = useSWR('http://localhost:3000/tintucs', fetcher);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'vi';
    setLanguage(savedLanguage);
  }, []);

  if (detailError || allError) return <div>Lỗi load dữ liệu.</div>;
  if (detailLoading || allLoading) return <div>Đang tải</div>;

  const latestTintucs = allTintucs
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  return (
    <div className='containet-fluid'>
      <div className='show-new'>
        <h1>New</h1>
        <img src="/img/image27.png" alt="" />
      </div>
      <div className="container mt-3 show-content">
      <div className="row showconten">
        <div className="col-md-3 new-show">
          <h4>Tin Tức Mới Nhất</h4>
          <TinTucKhac data={latestTintucs} language={language} />
        </div>
        <div className="col-md-9">
          <TinTucDetail tintuc={tintuc} language={language} />
        </div>
      </div>
    </div>
    </div>
  );
}
