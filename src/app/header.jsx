import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShowSidebar, HideSidebar, setLanguage } from './components/index';

const Header = () => {
  const [currentLanguage, setCurrentLanguage] = useState('vi');
  const [user, setUser] = useState(null);

  useEffect(() => {

    const savedLanguage = localStorage.getItem('language') || 'vi';
    setCurrentLanguage(savedLanguage);
    setLanguage(savedLanguage);
  
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userObject = JSON.parse(savedUser);
        if (userObject && userObject.name) {
          setUser(userObject);
        }
      } catch (e) {
        console.error('Error parsing user from localStorage', e);
        localStorage.removeItem('user'); 
      }
    }
  }, []);
  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    setLanguage(language);
    localStorage.setItem('language', language);
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col-xl-3 col-md-12 col-sm-8 col-8 logoheader">
          <Link href="/"><img style={{ margin: 0 }} src="/img/logoheader.png" alt="Logo" /></Link>
        </div>
        <div className="col-xl-9 col-md-12 col-sm-4 col-4 menu justify-content-end">
          <ul className="nav-links mt-3 me-5 nav justify-content-end menu-all">
            <li><Link href="/reservation" data-translate="RESERVATION">ĐẶT CHỖ</Link></li>
            <li><a href="#event-venue" data-translate="EVENT VENUE">ĐỊA ĐIỂM SỰ KIỆN</a></li>
            <li><Link href="/HighlighesEvents" data-translate="HIGHLIGHTED EVENTS">SỰ KIỆN NỔI BẬT</Link></li>
            <li><a href="#contact-us" data-translate="CONTACT US">LIÊN HỆ</a></li>
            <li><Link href="/news" data-translate="NEWS">TIN TỨC</Link></li>
            <li><a href="#gallery" data-translate="GALLERY">BỘ SƯU TẬP</a></li>
            {user ? (
              <>
                <li><span data-translate="USER_NAME">{user.name}</span></li>
                <li><button onClick={handleLogout} className="btn btn-link" data-translate="LOGOUT">Đăng xuất</button></li>
              </>
            ) : (
              <li><Link href="/login" data-translate="LOGIN">ĐĂNG NHẬP</Link></li>
            )}
            <div className="language-menu">
              <button id="languageButton" data-translate="Language">
                {currentLanguage === 'vi' ? 'Tiếng Việt' : 'English'}
              </button>
              <ul>
                <li>
                  <img width="32px" src="/img/vietnam.png" alt="Vietnam" />
                  <a href="#" onClick={() => handleLanguageChange('vi')}>Vietnamese</a>
                </li>
                <li>
                  <img width="32px" src="/img/united-kingdom.png" alt="English" />
                  <a href="#" onClick={() => handleLanguageChange('en')}>English</a>
                </li>
              </ul>
            </div>
          </ul>
          <ul className="btn-menu" style={{ listStyleType: 'none' }}>
            <li onClick={ShowSidebar}><img src="/img/icon/menu-burger.png" alt="Menu" /></li>
          </ul>
          <div className="nav-links menumini">
            <img onClick={HideSidebar} src="/img/icon/cross.png" width="30px" alt="Close" />
            <li><Link href="/eservation" data-translate="RESERVATION">ĐẶT CHỖ</Link></li>
            <li><a href="#event-venue" data-translate="EVENT VENUE">ĐỊA ĐIỂM SỰ KIỆN</a></li>
            <li><Link href="/HighlighesEvents" data-translate="HIGHLIGHTED EVENTS">SỰ KIỆN NỔI BẬT</Link></li>
            <li><a href="#contact-us" data-translate="CONTACT US">LIÊN HỆ</a></li>
            <li><a href="#news" data-translate="NEWS">TIN TỨC</a></li>
            <li><a href="#gallery" data-translate="GALLERY">BỘ SƯU TẬP</a></li>
            {user ? (
              <>
                <li><span data-translate="USER_NAME">{user.name}</span></li>
                <li><button onClick={handleLogout} className="btn btn-link" data-translate="LOGOUT">Đăng xuất</button></li>
              </>
            ) : (
              <li><Link href="/login" data-translate="LOGIN">ĐĂNG NHẬP</Link></li>
            )}
            <div className="language-menumini">
              <button id="languageButton" data-translate="Language">
                {currentLanguage === 'vi' ? 'Tiếng Việt' : 'English'}
              </button>
              <ul>
                <li className='language'>
                  <img width="32px" src="/img/vietnam.png" alt="Vietnam" />
                  <a href="#" onClick={() => handleLanguageChange('vi')}>VN</a>
                </li>
                <li className='language'>
                  <img width="32px" src="/img/united-kingdom.png" alt="English" />
                  <a href="#" onClick={() => handleLanguageChange('en')}>EN</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
