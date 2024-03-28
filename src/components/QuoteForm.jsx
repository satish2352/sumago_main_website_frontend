import React, { useState } from 'react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    contact: '',
    email: '',
    service: '',
    other: '',
    address: '',
    comment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">GET A QUOTE</h4>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleInputChange}
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Contact:</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              maxLength="10"
              minLength="10"
              pattern="[7-9]{1}[0-9]{9}"
              placeholder="Mobile no"
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              pattern="^(([-\w\d]+)(\.[-\w\d]+)@([-\w\d]+)(\.[-\w\d]+)(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label>Type of Services:</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="form-control"
              required
            >
              <option value="">Select Service</option>
              <option value="Website Development">Website Development</option>
              <option value="App Development">App Development</option>
              <option value="Software Development">Software Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Social Media">Social Media</option>
              <option value="SEO">SEO</option>
              <option value="Training/ Internship">Training/ Internship</option>
              <option value="Startup Consultancy">Startup Consultancy</option>
              <option value="Web Hosting">Web Hosting</option>
            </select>
          </div>
          <div className="form-group">
            <label>Other:</label>
            <input
              type="text"
              name="other"
              value={formData.other}
              onChange={handleInputChange}
              placeholder="Other Service"
            />
          </div>
          <div className="form-group">
            <label>Address / City:</label>
            <textarea
              rows="4"
              cols="10"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address / City"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Any Comment:</label>
            <textarea
              rows="4"
              cols="10"
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              placeholder="Comment"
            ></textarea>
          </div>
          <div className="form-group text-center mt-4">
            <input type="submit" className="btn btn-success btn-lg" value="Submit" />
            <input type="reset" className="btn btn-danger btn-lg" value="Clear" />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  );
};

export default QuoteForm;