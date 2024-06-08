import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../assets/images/wp-content/themes/printpark/assets/images/shape/e commerce.png';
import img1 from '../assets/images/wp-content/themes/printpark/assets/images/shape/Frame.png';
import img22 from '../assets/images/wp-content/themes/printpark/assets/images/shape/shape-20.png';
import im from '../assets/images/wp-content/uploads/2023/08/news-16-80x80.jpg'
import { useBlog } from '../Datacontext';

const BlogDetails = (props) => {
    const {blogs} = useBlog();

    return (
        <>
            <section class="page-title style-two centred">
                <div className="bg-layer"
                    style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover' }}>
                </div>
                <div className="pattern-layer"
                    style={{ backgroundImage: `url(${img22})` }}></div><div class="auto-container">
                    <div class="content-box">
                        <h1>A Non-Emergency Trusted Product services</h1>
                    </div>
                </div>

            </section>

            <section class="sidebar-page-container blog-details">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="content-side col-lg-8 col-md-12 col-sm-12 content-column">
                            <div className="blog-details-content">
                                <div className="thm-unit-test">
                                    <div className="content-one">
                                        <div className="upper-text">
                                            <p><span>w</span>{props.text}</p>
                                            <h4>{props.subtitle}</h4>
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
                                        <div className="text-box">
                                            <p>{props.subtitle}</p>
                                        </div>
                                    </div>

                                    <div className="content-three">
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
                                    </div>

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
                                                        <div className="post">
                                                            <figure className="post-thumb">
                                                                <a href="https://wp1.themevibrant.com/newwp/printpark/2023/09/05/protecting-goods-to-foster-local-solutions-to-globals/">
                                                                    <img width="80" height="80"
                                                                        src={a.img}
                                                                        className="attachment-printpark_80x80 size-printpark_80x80 wp-post-image"
                                                                        alt="" decoding="async"
                                                                        srcSet={a.img}
                                                                        sizes="(max-width: 80px) 100vw, 80px" />
                                                                </a>
                                                            </figure>
                                                            <h6>{a.date}</h6>
                                                            <h5>
                                                                <a href="https://wp1.themevibrant.com/newwp/printpark/2023/09/05/protecting-goods-to-foster-local-solutions-to-globals/">
                                                                    {a.title}                                                                </a>
                                                            </h5>
                                                        </div>
                                                    </>)
                                                })
                                            }

                                          
                                        </div>
                                    </div>
                                </div>
                                {/* Banner Widget */}
                                <div id="printpark_banner2-2" className="widget sidebar-side sidebar-widget widget_printpark_banner2">
                                    <div className="banner-widget">
                                        <div className="inner-box">
                                            <h3>Make your Packaging Stand out from Competitors</h3>
                                            <div className="image-box">
                                                <div className="shape" style={{ backgroundImage: 'url(https://wp1.themevibrant.com/newwp/printpark/wp-content/themes/printpark/assets/images/shape/shape-39.png)' }}></div>
                                                <figure className="image">
                                                    <img src="https://wp1.themevibrant.com/newwp/printpark/wp-content/uploads/2023/08/sidebar-1.png" alt="Awesome Image" />
                                                </figure>
                                            </div>
                                            <a href="https://wp1.themevibrant.com/newwp/printpark/contact/" className="theme-btn btn-one">Get a Free Quote</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div></div>
            </section >
        </>


    );
};

export default BlogDetails;
