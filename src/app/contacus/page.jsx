"use client";
import React, { useState } from 'react';
import styles from './styles.css';
import Link from 'next/link';



const ReservationForm = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='video-container col-12'>
                    <div className='video-text'>
                        <h1>DINING, DRINK & DANCE</h1>
                        <h4>ON OUR PRIME DESTINATION IN SAIGON</h4>
                        <Link href="/dacban" data-translate="SPECIAL BOOKING">RESERVATION</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ReservationForm;
