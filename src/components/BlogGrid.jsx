import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import im from '../assets/images/wp-content/uploads/2023/08/AWARD BANNER.png'
import axios from 'axios';
import { useBlog } from '../Datacontext';
import { Link } from 'react-router-dom';
const BlogGrid = () => {

    const { blogs } = useBlog();
    return (
        <div data-elementor-type="wp-page" data-elementor-id="19" class="elementor elementor-19">
            <section
                class="elementor-section elementor-top-section elementor-element elementor-element-2782308 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="2782308" data-element_type="section">
                <div class="elementor-container elementor-column-gap-default">
                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e39c265"
                        data-id="e39c265" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-72f41f3 elementor-widget elementor-widget-printpark_blog_grid"
                                data-id="72f41f3" data-element_type="widget"
                                data-settings="{&quot;icon_box_space&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_space_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_space_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;icon_box_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true}}"
                                data-widget_type="printpark_blog_grid.default">
                                <div class="elementor-widget-container">



                                    <section class="news-section blog-grid">
                                        <div class="row clearfix">


                                            {
                                                blogs.map((a) => {
                                                    return (
                                                        <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                                                            <div class="news-block-one wow fadeInUp animated" data-wow-delay="00ms"
                                                                data-wow-duration="1500ms">
                                                                <div class="inner-box te-blog">
                                                                    <div class="image-box">
                                                                        <figure class="image"
                                                                        ><img
                                                                                loading="lazy" decoding="async" width="350"
                                                                                height="270"
                                                                                src={a.img}
                                                                                class="attachment-printpark_350x270 size-printpark_350x270 wp-post-image"
                                                                                alt="" /></figure>
                                                                        <div class="image-content">
                                                                            <div class="post-info">
                                                                                <h6 class="te-category">
                                                                                    Digital</h6> <span
                                                                                        class="post-date te-meta"><i
                                                                                            class="flaticon-asterisks"></i>{a.date}</span>
                                                                            </div>
                                                                            <div class="share-box">
                                                                                <div class="share-icon"><i
                                                                                    class="flaticon-share"></i></div>
                                                                                <ul class="social-links team-card__social clearfix">
                                                                                    <li><a href="https://facebook.com/"><i
                                                                                        class="fa fa-facebook"></i></a></li>
                                                                                    <li><a href="https://twitter.com/"><i
                                                                                        class="fa fa-twitter"></i></a></li>
                                                                                    <li><a href="https://youtube.com/"><i
                                                                                        class="fa fa-youtube"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="lower-content">
                                                                        <h3 class="te-title">
                                                                            {a.title}
                                                                        </h3>
                                                                        <div class="link-box">

                                                                            <Link class="te-btn" to={`/blogdetals/${a.id}`}><i
                                                                                class="flaticon-arrow-right"></i>Continue Reading </Link></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                      



                                        </div>
                                       
                                    </section>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BlogGrid;
