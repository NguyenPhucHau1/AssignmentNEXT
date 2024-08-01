"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setLanguage } from '../components/index';
import styles from './dacban.css';
import style from '../styles/index.css';
const translations = {
  vi: {
    "RESERVATION": "Đặt chỗ",
    "EVENT VENUE": "Địa điểm sự kiện",
    "HIGHLIGHTED EVENTS": "Sự kiện nổi bật",
    "CONTACT US": "Liên hệ",
    "NEWS": "Tin tức",
    "GALLERY": "Bộ sưu tập",
    "Language": "Tiếng Việt",
    "SPECIAL BOOKING": "Đặt bàn đặc biệt",
    "CompanyName": "Tên Công Ty: ",
    "Address": "Địa Chỉ: ",
    "Phone": "Liên Hệ: ",
    "RESERVATION_FORM_TITLE": "Đặt Bàn Tại Canalis",
    "CUSTOMER_NAME": "Tên Khách Hàng",
    "PHONE_NUMBER": "Số Điện Thoại",
    "RESERVATION_DATE": "Ngày Đặt",
    "ARRIVAL_TIME": "Giờ Đến",
    "GUEST_COUNT": "Số Khách",
    "SUBMIT": "Gửi"
  },
  en: {
    "RESERVATION": "Reservation",
    "EVENT VENUE": "Event Venue",
    "HIGHLIGHTED EVENTS": "Highlighted Events",
    "CONTACT US": "Contact Us",
    "NEWS": "News",
    "GALLERY": "Gallery",
    "Language": "English",
    "SPECIAL BOOKING": "Special Booking",
    "CompanyName": "CompanyName: ",
    "Address": "Address: ",
    "Phone": "Hotline: ",
    "RESERVATION_FORM_TITLE": "Reservation Form Canalis",
    "CUSTOMER_NAME": "Customer Name",
    "PHONE_NUMBER": "Phone Number",
    "RESERVATION_DATE": "Reservation Date",
    "ARRIVAL_TIME": "Arrival Time",
    "GUEST_COUNT": "Guest Count",
    "SUBMIT": "Submit"
  }
};

const ReservationForm = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    Name: '',
    PhoneNumber: '',
    Date: '',
    ArrivalTime: '',
    sokhach: ''
  });

  const [savedLanguage, setSavedLanguage] = useState('en'); // Set default to 'en'
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const language = localStorage.getItem('language') || 'en';
    setSavedLanguage(language);
    setLanguage(language);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/dacbans/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      console.log('Success:', data);
      setShowThankYou(true); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
    router.push('/'); 
  };

  return (
    <div id="reservationForm" className="container form-oder">
      <h1 className="mt-5 mb-4">{translations[savedLanguage]?.RESERVATION_FORM_TITLE}</h1>
      <form onSubmit={handleSubmit} className="mb-4 form-submit">
        <label className="mb-3">
          <span className="fw-bold">{translations[savedLanguage]?.CUSTOMER_NAME}</span>
          <input
            type="text"
            name="Name"
            value={form.Name}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <label className="mb-3">
          <span className="fw-bold">{translations[savedLanguage]?.PHONE_NUMBER}</span>
          <input
            type="text"
            name="PhoneNumber"
            value={form.PhoneNumber}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <label className="mb-3">
          <span className="fw-bold">{translations[savedLanguage]?.RESERVATION_DATE}</span>
          <input
            type="date"
            name="Date"
            value={form.Date}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <label className="mb-3">
          <span className="fw-bold">{translations[savedLanguage]?.ARRIVAL_TIME}</span>
          <input
            type="time"
            name="ArrivalTime"
            value={form.ArrivalTime}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <label className="mb-3">
          <span className="fw-bold">{translations[savedLanguage]?.GUEST_COUNT}</span>
          <input
            type="number"
            name="sokhach"
            value={form.sokhach}
            onChange={handleChange}
            className="form-control"
          />
        </label>
        <button type="submit" className="btn btn-primary">{translations[savedLanguage]?.SUBMIT}</button>
      </form>
      
      {showThankYou && (
        <div className="thank-you-overlay">
          <div className="thank-you-message">
            <p>Cảm Ơn Quý Khách</p>
            <button onClick={handleThankYouClose} className="btn btn-primary">OK</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .thank-you-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .thank-you-message {
          background: white;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ReservationForm;
