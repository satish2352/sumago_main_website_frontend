import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img2 from '../assets/images/wp-content/themes/printpark/assets/images/shape/e commerce.png';
import img1 from '../assets/images/wp-content/themes/printpark/assets/images/shape/Frame.png';
import img22 from '../assets/images/wp-content/themes/printpark/assets/images/shape/shape-20.png';
import im from '../assets/images/wp-content/uploads/2023/08/news-16-80x80.jpg'
import { useBlog } from '../Datacontext';
import GetAQuoteModal from '../components/GetAQuoteModal';
import '../assets/css/blog.css'
import styled from 'styled-components';
import im1 from '../assets/images/wp-content/uploads/2023/08/laptop.png'

const BlogDetails = (props) => {
    const { blogs } = useBlog();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show, setShow] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 460,
            behavior: 'smooth',
        });
    };
    const StyledBlogContent = styled.div`
  p {
    color: #0c0c0c !important;
  }
  ul, li {
    list-style: disc !important;
    padding: 4px !important;
    margin: 4px !important;
  }  table, th, td {
    border: none !important;
    border-collapse: collapse !important;
  }
`;
    return (
        <>
            <section class="page-title style-two centred">
                <div className="bg-layer"
                    style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover' }}>
                </div>
                <div className="pattern-layer"
                    style={{ backgroundImage: `url(${img22})` }}></div><div class="auto-container">
                    <div class="content-box">
                        <h1>{props.title}</h1>
                    </div>
                </div>

            </section>

            <section class="sidebar-page-container blog-details">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="content-side col-lg-8 col-md-12 col-sm-12 content-column">
                            <div className="blog-details-content">
                                <div className="thm-unit-test">
                                    <div className="upper-text">
                                        <h4>{props.title}</h4>
                                    </div>
                                    <div className="blog-details-content">
                                        <div className="ck-content" >
                                            <StyledBlogContent dangerouslySetInnerHTML={{ __html: props.text }} />
                                        </div>
                                    </div>

                                    <div className="content-one">
                                        <div className="upper-text">
                                        </div>


                                        <figure className="image-box">
                                            <img
                                                fetchpriority="high"
                                                decoding="async"
                                                src={props.img}
                                                alt=""
                                                width="730"
                                                height="500"
                                                className="alignnone size-medium wp-image-467"

                                                sizes="(max-width: 730px) 100vw, 730px"
                                            />
                                        </figure>


                                    </div>

                                    {/* <div className="content-three">
                                        <h2>Exceeding Expectations</h2>
                                        <p>Belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed.</p>
                                        <blockquote>
                                            <div className="icon-box">
                                                <img
                                                    decoding="async"
                                                    src="https://wp1.themevibrant.com/newwp/printpark/wp-content/uploads/2023/08/icon-4.png"
                                                    alt=""
                                                    width="30"
                                                    height="18"
                                                    className="alignnone size-full wp-image-470"
                                                />
                                            </div>
                                            <h4>The right partner for your printing and media needs. Turning bright ideas into brilliant labels.</h4>
                                            <h6>Jessica Mcdade</h6>
                                        </blockquote>
                                        <div className="inner-box">
                                            <div className="single-item">
                                                <p><span>Consider the Possibilities:</span> Duty through weakness of which is the same as saying through shrinking from toil and pain. These cases are perfectly simple.</p>
                                            </div>
                                            <div className="single-item">
                                                <p><span>Innovation in Print:</span> Undertakes laborious physical exercise, except to obtain some advan- tage from it? But who has any right to find fault.</p>
                                            </div>
                                            <div className="single-item">
                                                <p><span>Technology in Print:</span> Which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.</p>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                        <div className="sidebar-side col-lg-4 col-md-12 col-sm-12 sidebar">
                            <div className="blog-sidebar default-sidebar">


                                {/* Recent Posts Widget */}


                                {/* Tag Cloud Widget */}
                                <div id="printpark_recent_posts-2" className="widget sidebar-side sidebar-widget widget_printpark_recent_posts">
                                    <div className="post-widget">
                                        <div className="widget-title">
                                            <h3>Popular Post</h3>
                                        </div>
                                        <div className="post-inner">
                                            {
                                                blogs.map((a) => {
                                                    return (<>
                                                        <div className="post" >

                                                            <Link class="te-btn" to={`/blogs/${a.title.toLowerCase().replace(/\s+/g, '-')}`} onClick={scrollToTop}>
                                                                <figure className="post-thumb">
                                                                    <a  >
                                                                        <img width="180" height="180"
                                                                            src={a.img}
                                                                            className="attachment-printpark_80x80 size-printpark_80x80 wp-post-image"
                                                                            alt="" decoding="async"
                                                                            srcSet={a.img}
                                                                            sizes="(max-width: 80px) 100vw, 80px" />
                                                                    </a>
                                                                </figure>
                                                                <h6 >  {new Date(a.date)
                                                                    .toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" })
                                                                    .replace(",", "")}</h6>

                                                                <h5>
                                                                    <a  >
                                                                        {a.title}                                                                </a>
                                                                </h5>
                                                            </Link>
                                                        </div >
                                                    </>)
                                                })
                                            }


                                        </div>
                                    </div>
                                </div>
                                {/* Banner Widget */}
                                <div id="printpark_banner-1" className="widget widget_printpark_banner">
                                    <div className="banner-widget">
                                        <div className="inner-box">
                                            <h3 className='text-white'>Make your Website stand out from Competitors!</h3>
                                            <div className="image-box">
                                                {/* <div className="shape" style={{ backgroundImage: `url(${shape37})` }}></div> */}
                                                <figure className="image">
                                                    <img src={im1} alt="" />
                                                </figure>
                                            </div>
                                            <button type="button" className="theme-btn btn-two" onClick={handleShow}>
                                                GET A QUOTE
                                            </button>
                                            <GetAQuoteModal show={show} handleClose={handleClose} />

                                        </div>
                                    </div>
                                </div>
                                {/* <div id="printpark_banner2-2" className="widget sidebar-side sidebar-widget widget_printpark_banner2">
                                    <div className="banner-widget">
                                        <div className="inner-box">
                                            <h3>Make your Packaging Stand out from Competitors</h3>
                                            <div className="image-box">
                                                <div className="shape" style={{ backgroundImage: 'url(https://wp1.themevibrant.com/newwp/printpark/wp-content/themes/printpark/assets/images/shape/shape-39.png)' }}></div>
                                                <figure className="image">
                                                    <img src="https://wp1.themevibrant.com/newwp/printpark/wp-content/uploads/2023/08/sidebar-1.png" alt="Awesome Image" />
                                                </figure>
                                            </div>

                                            <div className="menu-right-content">
                                                <div className="btn-box">
                                                    <button className="theme-btn btn-one rounded-pill glowing-btn" onClick={handleShow}>
                                                        Get a Quote
                                                    </button>
                                                </div>

                                                <style jsx>{`
        .glowing-btn {
            position: relative;
            display: inline-block;
            color: white;
            background-color: rgb(255, 34, 34);
            padding: 12px 24px;
            font-size: 18px;
            font-weight: bold;
            border: none;
            cursor: pointer;
            text-decoration: none;
            border-radius: 50px;
        }

        .glowing-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(255, 34, 34, 1);
        }

      
    `}</style>
                                            </div>

                                            <GetAQuoteModal show={show} handleClose={handleClose} />
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div></div>
            </section >
        </>


    );
};

export default BlogDetails;
