import React from 'react';

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-xl-3 col-md-12 logofooter">
          <img src="/img/logo/LOGO_CANALIS 2.png" width="80%" alt="" />
        </div>
        <div className="col-xl-5 col-md-12">
          <div className="footer-information">
            <span data-translate="CompanyName">Tên Công Ty:</span><a href="">CANALISNIGHTCLUB </a>
          </div>
          <div className="footer-information">
            <span data-translate="Address">Địa Chỉ:</span><a href="https://maps.app.goo.gl/Yr2CRFZWaicWmZN3A"> 264 Đ. Nam Kỳ Khởi Nghĩa, Phường 8, Quận 3, Hồ Chí Minh, Việt Nam</a>
          </div>
          <div className="footer-information">
            <span data-translate="Phone">Liên Hệ:</span><a href=""> 0828.264.264</a>
          </div>
          <div className="footer-information">
            <span>Email:</span><a href=""> Canalisnightclub@gmail.com</a>
          </div>
        </div>
        <div className="col-xl-4 col-md-12">
          <div className="footer-web">
            <img src="/img/logo/facebook.png" alt="" /><a href="https://www.facebook.com/canalisclub.vn/">https://www.facebook.com/canalisclub.vn/</a>
          </div>
          <div className="footer-web">
            <img src="/img/logo/instagram.png" alt="" /><a href="https://www.instagram.com/canalisnightclub">https://www.instagram.com/canalisnightclub</a>
          </div>
          <div className="footer-web">
            <img src="/img/logo/png-transparent-qr-code-information-qr-code-android-qrcode-text-rectangle-monochrome-thumbnail 2.png" alt="" /><a href="#">CANALIST CUSTOMER APP</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
