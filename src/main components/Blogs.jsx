import React from 'react'
import { Link } from 'react-router-dom';
import BlogGrid from '../components/BlogGrid'
import img1 from '../assets/images/wp-content/themes/printpark/assets/images/shape/Frame.png';
import img22 from '../assets/images/wp-content/themes/printpark/assets/images/shape/shape-20.png';
const Blogs = () => {
    return (
        <div>
            <section className="page-title centred">
                <div className="bg-layer"
                    style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover' }}>
                </div>
                <div className="pattern-layer"
                    style={{ backgroundImage: `url(${img22})` }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>Blogs</h1>
                        <ul className="bread-crumb clearfix">
                            <li className="breadcrumb-item"><Link to="/" style={{ textDecoration: 'none' }}>Home &nbsp;</Link></li>
                            <li className="breadcrumb-item">Blogs</li>
                        </ul>
                    </div>
                </div>
            </section >
            <BlogGrid />
        </div>
    )
}

export default Blogs