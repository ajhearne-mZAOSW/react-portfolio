import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    // Handle field blur (when cursor moves out of a field)
    const handleBlur = (e) => {
        const { name, value } = e.target;

        if (value === '') {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`
        }));
        } else if (name === 'email' && !emailRegex.test(value)) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: 'Please enter a valid email address.'
        }));
        } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if all fields are valid before submission
        if (!formData.name || !formData.email || !formData.message || errors.email) {
            alert('Please fix the errors before submitting.');
            return;
        }
        alert('Form submitted successfully!');

            // Reset form data after successful submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className="contact-me" id="contact-me">
            <div className="contact-me-title">
                contact me
            </div>
            <p>
                Interested in getting in touch? I'd love to hear from you! Head over to LinkedIn to have a look at my career so far, check out my latest work on Github, drop me an email or send me a message below.
            </p>
            <div className="contact">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Your name"
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div>
                    <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Your email"
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Your message"
                        />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
