import React from 'react'
import { Link } from 'react-router-dom';

const BlogHeader = () => {
    return (
        <section class="breadcrumb-main-area">
        <div class="container">
            <nav aria-label="breadcrumb" class="breadcrumb-main">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Blog</li>
                </ul>
            </nav>
        </div>
    </section>
    )
}
export default BlogHeader;