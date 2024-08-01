const translations = {
  vi: {
    "RESERVATION": "Đặt Chỗ",
    "EVENT VENUE": "Địa Điểm Sự Kiện",
    "HIGHLIGHTED EVENTS": "Sự Kiện Nổi Bật",
    "CONTACT US": "Liên Hệ",
    "NEWS": "Tin Tức",
    "GALLERY": "Bộ Sưu Tập",
    "Language": "Tiếng Việt",
    "SPECIAL BOOKING": "Đặt Bàn Đặc Biệt",
    "CompanyName": "Tên Công Ty: ",
    "Address": "Địa Chỉ: ",
    "Phone": "Liên Hệ: ",
    "RESERVATION_FORM_TITLE": "Đặt chỗ",
    "CUSTOMER_NAME": "Tên Khách Hàng",
    "PHONE_NUMBER": "Số Điện Thoại",
    "RESERVATION_DATE": "Ngày Đặt",
    "ARRIVAL_TIME": "Giờ Đến",
    "GUEST_COUNT": "Số Khách",
    "SUBMIT": "Gửi",
    "LOGIN" : "Đăng Nhập",
    "Menu": " Menu"
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
    "RESERVATION_FORM_TITLE": "Reservation Form",
    "CUSTOMER_NAME": "Customer Name",
    "PHONE_NUMBER": "Phone Number",
    "RESERVATION_DATE": "Reservation Date",
    "ARRIVAL_TIME": "Arrival Time",
    "GUEST_COUNT": "Guest Count",
    "SUBMIT": "Submit",
    "LOGIN" : "Login"
  }
};

export function setLanguage(language) {
  if (typeof window !== 'undefined') {
    const selectedTranslations = translations[language] || translations['en'];
    document.querySelectorAll('[data-translate]').forEach(el => {
      el.textContent = selectedTranslations[el.dataset.translate] || '';
    });
    localStorage.setItem('language', language);
  }
}

export async function showRandomPoster() {
  if (typeof window !== 'undefined') {
    try {
      const response = await fetch('http://localhost:3000/posters');
      const posters = await response.json();

      const posterElements = posters.map(poster => {
        if (poster.loai === 1 && poster.trangthai== 1) {
          return `<div class="poster"><img src="http://localhost:3000/img/${poster.poster}" alt="Poster"></div>`;
        } else if (poster.loai === 2 && poster.trangthai== 1) {
          return `<div class="poster"><iframe width="1513" height="573" src="${poster.poster}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
        }
      });

      const overlay = document.getElementById('posterOverlay');
      const posterContainer = overlay.querySelector('.poster-container');
      const randomPoster = posterElements[Math.floor(Math.random() * posterElements.length)];
      posterContainer.innerHTML = randomPoster + '<a href="/dacban" data-translate="SPECIAL BOOKING">RESERVATION</a>';
      overlay.style.display = 'flex';
    } catch (error) {
      console.error('Failed to fetch posters:', error);
    }
  }
}

export function hidePoster() {
  if (typeof window !== 'undefined') {
    document.getElementById('posterOverlay').style.display = 'none';
  }
}

export function tacposter() {
  if (typeof window !== 'undefined') {
    const sidebar = document.getElementById('posterOverlay');
    sidebar.style.display = "none";
  }
}

export function ShowSidebar() {
  if (typeof window !== 'undefined') {
    const sidebar = document.querySelector('.menumini');
    sidebar.style.display = "flex";
  }
}

export function HideSidebar() {
  if (typeof window !== 'undefined') {
    const sidebar = document.querySelector('.menumini');
    sidebar.style.display = "none";
  }
}
