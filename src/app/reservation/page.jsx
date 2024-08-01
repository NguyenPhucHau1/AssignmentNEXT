"use client";
import React, { useState } from 'react';
import styles from './styles.css';
import Link from 'next/link';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <div className="carousel-inner">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
            </div>
            <div className="carousel-control-prev" onClick={prevSlide}>
                <img src="../img/icon/previous.png" alt="Previous" />
            </div>
            <div className="carousel-control-next" onClick={nextSlide}>
                <img src="../img/icon/next.png" alt="Next" />
            </div>
        </div>
    );
};

const ReservationForm = () => {
    const eventsImages = [
        '../img/image26.png',
        '../img/image27.png',
        '../img/image28.png'
    ];

    const menuImages = [
        '../img/image5.png',
        '../img/image26.png',
        '../img/image27.png'
    ];

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='video-container col-12'>
                    <div className='video-text'>
                        <h1>DINING, DRINK & DANCE</h1>
                        <h4>ON OUR PRIME DESTINATION IN SAIGON</h4>
                        <Link href="/dacban" data-translate="SPECIAL BOOKING">RESERVATION</Link>
                    </div>
                    <iframe src="https://www.youtube.com/embed/ZdMqvywrAw4" allow="autoplay; fullscreen"></iframe>
                </div>
                <div className='col-12 baners1'>
                    <h1 data-translate="HIGHLIGHTED EVENTS">HIGHLIGHTED EVENTS</h1>
                    <div className='container'>
                        <Carousel images={eventsImages} />
                    </div>
                    <div className='row mt-3 link-menu'>
                        <div className='col-md-4 col-12 text-center'>
                            <Link href="https://www.google.com/maps/place/264+%C4%90.+Nam+K%E1%BB%B9+Kh%E1%BB%9Fi+Ngh%C4%A9a,+Ph%C6%B0%E1%BB%9Dng+8,+Qu%E1%BA%ADn+3,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7873557,106.684247,17z/data=!3m1!4b1!4m6!3m5!1s0x317528d35a283aa3:0xe4809e42720553d1!8m2!3d10.7873557!4d106.6868219!16s%2Fg%2F11c5mgbvnw?entry=tts&g_ep=EgoyMDI0MDcwOS4wKgBIAVAD">
                                <img src="../img/icon/send.png" alt="" />GET DIRECTION
                            </Link>
                        </div>
                        <div className='col-md-4 col-12 text-center'>
                            <Link href="/dacban">
                                <img src="../img/icon/reserve.png" alt="" />RESERVATION
                            </Link>
                        </div>
                        <div className='col-md-4 col-12 text-center'>
                            <Link href="/reservation">
                                <img src="../img/icon/menu1.png" alt="" />Menu
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 mt-5 menuchinh'>
                    <div className='row'>
                        <div className='col-md-4'></div>
                        <div className='col-md-4'>
                            <div className='container'>
                                <Carousel images={menuImages} />
                            </div>
                        </div>
                        <div className='col-4'></div>
                    </div>
                </div>
                <div className='col-12 mt-5 menu-all '>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='menu-loai'>
                            <h1>Water</h1>
                            <span>A new and unique experience with a <br/>
                                 360° view of the entire city</span>
                            </div>
                            <Carousel images={menuImages} />
                        </div>
                        <div className='col-md-4'>
                            <div className='menu-loai'>
                            <h1>Food</h1>
                            <span>Drinks expertly crafted by talented <br/>
                                 bartenders bring a special  <br/>
                                Chill flavor</span>
                            </div>
                            <Carousel images={menuImages} />
                        </div>
                        <div className='col-md-4'>
                        <div className='menu-loai'>
                            <h1>Emotion</h1>
                            <span>Get down and party to the vibrant <br/> beats from top-notch DJsalong <br/> with fiery dance moves</span>
                            </div>
                            <Carousel images={menuImages} />
                        </div>
                    </div>
                </div>
                <div className='col-12 menu-link'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Link href="">Fanpage</Link>
                        </div>
                        <div className='col-md-3'>
                            <Link href="">Tiktok</Link>
                        </div>
                        <div className='col-md-3'>
                            <Link href="">Instargram</Link>
                        </div>
                        <div className='col-md-3'>
                            <Link href="">Tripadvisor</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ReservationForm;
