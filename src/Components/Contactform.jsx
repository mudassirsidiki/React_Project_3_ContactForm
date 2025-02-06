import React, { useState } from "react";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Here you can send `formData` to a backend API or store it
  };

  return (
    <form className="contact-form-container" onSubmit={handleSubmit}>
      <div className="button-group">
        <button className="contact-button" type="button">
          <span className="icon">💬</span> VIA SUPPORT CHAT
        </button>
        <button className="contact-button" type="button">
          <span className="icon">📞</span> VIA CALL
        </button>
      </div>

      <button className="email-button" type="button">
        <span className="icon">📧</span> VIA EMAIL FORM
      </button>

      <div className="input-group">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        <textarea
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="textarea-field"
        />
      </div>

      <button type="submit" className="submit-button">
        SUBMIT
      </button>
    </form>
  );
};

export default Contactform;
