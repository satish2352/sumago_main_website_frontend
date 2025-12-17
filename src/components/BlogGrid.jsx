import React, { useState, useEffect } from 'react';
import { useBlog } from '../Datacontext';
import { Link } from 'react-router-dom';
import '../assets/css/ContactButton.css';

const BlogGrid = () => {
    const { blogs } = useBlog();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        if (blogs?.length) {
            const uniqueCategories = Array.from(new Set(blogs.map(blog => blog.category)));
            setCategories(uniqueCategories);
        }
    }, [blogs]);


    const scrollToTop = () => {
        window.scrollTo({
            top: 60,
            behavior: 'smooth',
        });
    };

    const filteredBlogs = selectedCategory === 'all'
        ? blogs
        : blogs.filter((blog) => blog.category === selectedCategory);

    return (
        <div data-elementor-type="wp-page" data-elementor-id="19" className="elementor elementor-19">

            {/* --- Category Tabs --- */}


            {/* --- Original Blog Section --- */}
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-2782308 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="2782308"
                data-element_type="section"
            >    <div className="te-category-tabs" style={{ textAlign: 'center', marginBottom: '30px' }}>

                    {categories.length > 1 && (
                        <div className="te-category-tabs" style={{ textAlign: 'center', marginBottom: '30px' }}>
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`te-tab-btn py-lg-3 px-lg-4 p-2 ${selectedCategory === 'all' ? 'active' : ''}`}
                            >
                                All
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`te-tab-btn py-lg-3 px-lg-4 p-2 ${selectedCategory === category ? 'active' : ''}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}

                </div>
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e39c265">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-72f41f3 elementor-widget elementor-widget-printpark_blog_grid"
                                data-id="72f41f3"
                                data-element_type="widget"
                                data-widget_type="printpark_blog_grid.default"
                            >
                                <div className="elementor-widget-container">
                                    <section className="news-section blog-grid">
                                        <div className="row clearfix">
                                            {filteredBlogs.map((a) => (
                                                <div className="col-lg-4 col-md-6 col-sm-12 news-block" key={a.id}>
                                                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms"
                                                        data-wow-duration="1500ms">
                                                        <div className="inner-box te-blog">
                                                            <div className="image-box">
                                                                <figure className="image" style={{ height: '220px', overflow: 'hidden' }}>
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width="350"
                                                                        height="270"
                                                                        src={a.img}
                                                                        className="attachment-printpark_350x270 size-printpark_350x270 wp-post-image"
                                                                        alt=""
                                                                    />
                                                                </figure>
                                                                <div className="image-content">
                                                                    <div className="post-info">
                                                                        <h6 className="te-category text-6">{a.category.split(' ')[0]}</h6>
                                                                        <span className="post-date te-meta">
                                                                            <i className="flaticon-asterisks"></i>
                                                                            {new Date(a.date)
                                                                                .toLocaleDateString("en-US", {
                                                                                    year: "numeric",
                                                                                    month: "short",
                                                                                    day: "2-digit",
                                                                                })
                                                                                .replace(",", "")}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="lower-content">
                                                                <h5 className="te-title">{a.title}</h5>
                                                                <div className="link-box">
                                                                    <Link
                                                                        className="te-btn"
                                                                        to={`/blogs/${a.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                                        onClick={scrollToTop}
                                                                    >
                                                                        <i className="flaticon-arrow-right"></i>
                                                                        Continue Reading
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
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
};

export default BlogGrid;
