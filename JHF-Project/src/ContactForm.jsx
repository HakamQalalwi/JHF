import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hours: "",
    country: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [funFact, setFunFact] = useState("");

  const funFacts = [
    "I love solving problems in my free time!",
    "I enjoy exploring new technologies and learning new skills.",
    "I'm passionate about contributing to open-source projects.",
    "I once built a personal assistant chatbot from scratch.",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let errorMessages = {};

    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.country
    ) {
      errorMessages.general = "Please fill all required fields.";
      valid = false;
    }

    if (!validateEmail(formData.email)) {
      errorMessages.email = "Please enter a valid email.";
      valid = false;
    }

    if (!valid) {
      setErrors(errorMessages);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
    }
  };

  const showFunFact = () => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setFunFact(randomFact);
  };

  return (
    <section id="contact" className="contact">
      <h4>Contact Information</h4>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:*</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:*</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="hours">Available hours:</label>
          <br />
          <input
            type="text"
            id="hours"
            name="hours"
            className="form-input"
            value={formData.hours}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:*</label>
          <br />
          <input
            type="text"
            id="country"
            name="country"
            className="form-input"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:*</label>
          <br />
          <textarea
            id="message"
            name="message"
            rows="4"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        {errors.general && <p className="error-message">{errors.general}</p>}
        <div className="form-group">
          <input type="submit" value="Submit" className="form-submit" />
          <button
            type="button"
            id="funFactButton"
            className="form-submit"
            onClick={showFunFact}
          >
            Show Fun Fact
          </button>
          {funFact && (
            <p id="funFact" style={{ fontStyle: "italic" }}>
              {funFact}
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
