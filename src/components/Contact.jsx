import React from 'react';

const Contact = () => (
    <section className="contact-me" id="contact-me">
        <div className="contact-me-title">
            contact me
        </div>
        <p>
            Interested in getting in touch? I'd love to hear from you! Head over to LinkedIn to have a look at my career so far, check out my latest work on Github, or drop me an email.
        </p>
        <div className="contact-socials">
            <a href="https://github.com/ajhearne-mZAOSW"><i className="fa-brands fa-github"></i><p>github.com/ajhearne-mZAOSW</p></a>
            <a href="https://www.linkedin.com/in/alanahearne/"><i className="fa-brands fa-linkedin-in"></i><p>linkedin.me/alanahearne</p></a>
            <a href="mailto:alanajhearne@gmail"><i className="fa-solid fa-envelope"></i><p>alanajhearne@gmail.com</p></a>
        </div>
    </section>
);

export default Contact;