import React from 'react';

const Contact = () => {
    return (
        <section className="contact-section">
            <h1>Let's talk.</h1>
            <p>Get in touch via the form below, or by emailing <span className='email'><a href="mailto:usaamankangi@gmail.com?subject=Hello!">usaamankangi@gmail.com</a></span>.</p>
            <form className="contact-form" action="https://formsubmit.co/usaamashare@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="Your Portfolio Site!" />
                <input type="hidden" name="_cc" value="usaamankangi@gmail.com,usaamabinnasur@gmail.com" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://usaama-portfolio.web.app/" />
                <input type="text" name="name" id="name" autoComplete="off" placeholder="name" />
                <input type="text" name="email" id="email" autoComplete="off" placeholder="email" required/>
                <textarea name="msg" id="msg" placeholder="message" autoComplete="off" required></textarea>
                <button type="submit" className="form-submit-btn">contact</button>
            </form>
        </section>
    );
}


export default Contact;
