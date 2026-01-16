import React, { useState } from "react";
import "./OtherPages.css";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      toast.success("Thank you for your message! We'll get back to you soon." ,  { duration: 4000 });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We would love to hear from you! Send us a message below.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
