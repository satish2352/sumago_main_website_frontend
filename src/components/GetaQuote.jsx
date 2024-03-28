import React, { useState } from 'react';
import '../assets/css/GetaQuote.css';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

const GetaQuote = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [service, setService] = useState("")
    const [other, setOther] = useState("")
    const [address, setAddress] = useState("")
    const [comment, setComment] = useState("")

    const SubmitData = (e) => {
        e.preventDefault();
        let newData = {
            name: name, email: email, phone: phone, service: service, other_service: other, address: address, comment: comment
        }
        axios.post("/quote/add", newData).then((resp) => {
            console.log("resp", resp)
            setName("")
            setEmail("")
            setPhone("")
            setService("")
            setOther("")
            setAddress("")
            setComment("")
        }).catch((err) => {
            console.log("err", err);
        })
    }
    return (
        <>
            <div className='getaquote-section container'>
                <Row>
                    <Col lg={4} md={6} sm={12} className='column-1'>
                        <div className="elementor-column elementor-top-column elementor-element elementor-element-fec6395  "
                            data-id="fec6395" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated d-flex  align-content-center">
                                <div className="elementor-element elementor-element-91f6e29 elementor-widget elementor-widget-printpark_icon_box"
                                    data-id="91f6e29" data-element_type="widget"
                                    data-widget_type="printpark_icon_box.default">
                                    <div className="elementor-widget-container">
                                        <section className="info-section centred p-0 m-0">
                                            <div className="info-column">
                                                <div className="info-block-one">
                                                    <div className="inner-box te-icon-box">
                                                        <div>
                                                            <div className="icon-box te-icon">
                                                                <i className="flaticon-incoming-call"></i>
                                                            </div>
                                                            <p className="te-text">If you need help, don't look far,
                                                                <br />
                                                                call us today!
                                                            </p>
                                                            <h4 className="te-subtitle"><a
                                                                href="tel:+91 8530388815" className='ms-5 me-5 ps-1 pe-1'>+918530388815</a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='column-2'>
                        <div className="elementor-column elementor-top-column elementor-element elementor-element-a4fd0a5  "
                            data-id="a4fd0a5" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated d-flex  align-content-center">
                                <div className="elementor-element elementor-element-ca701f4 elementor-widget elementor-widget-printpark_icon_box"
                                    data-id="ca701f4" data-element_type="widget"
                                    data-widget_type="printpark_icon_box.default">
                                    <div className="elementor-widget-container">
                                        <section className="info-section centred p-0 m-0">
                                            <div className="info-column">
                                                <div className="info-block-one">
                                                    <div className="inner-box te-icon-box cardAtCenter" >
                                                        <div>
                                                            <div className="icon-box te-icon">
                                                                <i className="flaticon-map"></i>
                                                            </div>
                                                            <h6 className="te-subtitle">Cost-effective & long-term Custom Software solutions by committed professionals.</h6>
                                                            <br />
                                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                                                <p>
                                                                    <button type="button" className="theme-btn btn-two" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                        GET A QUOTE
                                                                    </button>
                                                                    {/* Modal */}
                                                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                        <div className="modal-dialog">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header">
                                                                                    <h4 className="modal-title">GET A QUOTE</h4>
                                                                                    <button type="button" className="close" data-bs-dismiss="modal">X</button>
                                                                                </div>
                                                                                <div className="modal-body">
                                                                                    <form method="post" onSubmit={SubmitData} name="myForm">
                                                                                        <div style={{ textAlign: "left" }} className="form-group">
                                                                                            <label>Name :</label>
                                                                                            <input className="form-control" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                                                                                        </div>
                                                                                        <div style={{ textAlign: "left" }} className="form-group">
                                                                                            <label>Contact :</label>
                                                                                            <input className="form-control" type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength="10" minLength="10" pattern="[7-9]{1}[0-9]{9}" placeholder="Phone no" required />
                                                                                        </div>
                                                                                        <div style={{ textAlign: "left" }} className="form-group">
                                                                                            <label>Email :</label>
                                                                                            <input className="form-control" type="email" name="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                                                                        </div>
                                                                                        <div style={{ textAlign: "left" }} className="form-group">
                                                                                            <label>Type of Services :</label>
                                                                                            <select name="service" className="form-control" required value={service} onChange={(e) => setService(e.target.value)}>
                                                                                                <option value="">Select Service</option>
                                                                                                <option value="Website Development">Website Development</option>
                                                                                                <option value="App Development">App Development</option>
                                                                                                <option value="Software Development">Software Development</option>
                                                                                                <option value="Digital Marketing">Digital Marketing</option>
                                                                                                <option value="Social Media">Social Media</option>
                                                                                                <option value="SEO">SEO</option>
                                                                                                <option value="Training/Internship">Training/Internship</option>
                                                                                                <option value="Start up Consultancy">Start up Consultancy</option>
                                                                                                <option value="#">Web Hosting</option>
                                                                                            </select>
                                                                                        </div>
                                                                                        <div style={{ textAlign: "left" }} className="form-group">
                                                                                            <label>Other :</label>
                                                                                            <input className="form-control" type="text" name="other" value={other} onChange={(e) => setOther(e.target.value)} placeholder="Other Service" />
                                                                                        </div>
                                                                                        <div style={{ textAlign: "left" }} className="form-group">
                                                                                            <label>Address / City :</label>
                                                                                            <textarea className="form-control" rows="4" cols="10" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address / City"></textarea>
                                                                                        </div>
                                                                                        <div style={{ textAlign: "left" }} className="form-group">
                                                                                            <label>Any Comment :</label>
                                                                                            <textarea className="form-control" rows="4" cols="10" name="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Comment"></textarea>
                                                                                        </div>
                                                                                        <div style={{ textAlign: "left" }} className="form-group mt-4">
                                                                                            <center>
                                                                                                <button className="btn btn-success btn-lg" type="submit" >Submit</button>
                                                                                                <button className="btn btn-success btn-lg" type="reset"  >Clear</button>

                                                                                            </center>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                                <div className="modal-footer">
                                                                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='column-3'>
                        <div className="elementor-column elementor-top-column elementor-element elementor-element-c350336 "
                            data-id="c350336" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated  d-flex  align-content-center">
                                <div className="elementor-element elementor-element-e2b4564 elementor-widget elementor-widget-printpark_icon_box"
                                    data-id="e2b4564" data-element_type="widget"
                                    data-widget_type="printpark_icon_box.default">
                                    <div className="elementor-widget-container">
                                        <section className="info-section centred p-0 m-0">
                                            <div className="info-column">
                                                <div className="info-block-one">
                                                    <div className="inner-box te-icon-box">
                                                        <div>
                                                            <div className="icon-box te-icon">
                                                                <i className="flaticon-message"></i>
                                                            </div>
                                                            <p className="te-text">Do you have a project to work? <br />Send your details.</p>
                                                            <h4 className="te-subtitle"><a
                                                                href="mailto:info@sumagoinfotech.com">info@sumagoinfotech.com</a></h4>
                                                            {/* <h4 className="te-subtitle"><a
                                                            href="mailto:info@example.com">+91 7263084881</a></h4> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default GetaQuote;
