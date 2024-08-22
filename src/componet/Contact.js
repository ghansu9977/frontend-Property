import React from 'react';
import './Signup.css'; // Assuming you have a CSS file for custom styles

const Contact = () => {
  return (
    <div id="contact" className="contact-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
            <div className="section-heading">
              <h2>Feel Free To Send Us a Message About Your Website Needs</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doer ket eismod tempor incididunt ut labore et dolores</p>
              <div className="phone-info">
                <h4>
                  For any enquiry, Call Us: <span><i className="fa fa-phone"></i> <a href="#">010-020-0340</a></span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
            <form id="contact" action="" method="post">
              <div className="row">
                <div className="col-lg-6">
                  <fieldset>
                    <input type="text" name="name" id="name" placeholder="Name" autoComplete="on" required />
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <input type="text" name="surname" id="surname" placeholder="Surname" autoComplete="on" required />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea name="message" id="message" placeholder="Message" required></textarea>
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="main-button">Send Message</button>
                  </fieldset>
                </div>
              </div>
              <div className="contact-dec">
                <img src="assets/images/contact-decoration.png" alt="Contact Decoration" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
