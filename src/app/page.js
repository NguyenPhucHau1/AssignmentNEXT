"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import crossIcon from '../../public/img/icon/cross.png';
import { tacposter, showRandomPoster, setLanguage } from './components/index';
import styles from './styles/index.css';

export default function Home() {
  React.useEffect(() => {
    showRandomPoster();
  }, []);

  return (
    <>
      <main>
        <div style={{ marginTop: '545px' }} className="main-index"></div>
      </main>
      <div className="overlay" id="posterOverlay">
        <div className="poster-container">
        </div>
        <img onClick={tacposter} className="DeletePoster" src='/img/icon/cross.png' alt="cross Icon" />
      </div>
    </>
  );
}