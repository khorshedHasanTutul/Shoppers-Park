import React from 'react';
import { Link } from 'react-router-dom';

const ContactHeader = () => {
    return (
        <section class="breadcrumb-main-area">
        <div class="container">
            <nav aria-label="breadcrumb" class="breadcrumb-main">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                </ul>
            </nav>
        </div>
    </section>
    );
};

export default ContactHeader;