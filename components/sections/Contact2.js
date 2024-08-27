const Contact2 = () => {
  return (
    <>
    <section className="contact-section-two">
      <div className="bg bg-pattern-11"></div>
      <div className="icon-shape4"></div>
      <div className="icon-shape5"></div>
      <div className="auto-container">
        <div className="row"> 
          <div className="form-column col-lg-7 col-md-12">
            <div className="inner-column">
              <div className="sec-title light"> <span className="sub-title">Contact Us</span>
                <h2>Let’s work together</h2>
              </div>
              <div className="contact-form style-two wow fadeInLeft"> 
                <form method="post" action="get" id="contact-form">
                  <div className="row">
                    <div className="form-group col-lg-6 col-md-12 col-sm-12">
                      <input type="text" name="full_name" placeholder="Your name" required/>
                    </div>
                    <div className="form-group col-lg-6 col-md-12 col-sm-12">
                      <input type="email" name="Email" placeholder="Email address" required/>
                    </div>
                    <div className="form-group col-lg-6 col-md-12 col-sm-12">
                      <input type="text" name="phone" placeholder="Phone" required/>
                    </div>
                    <div className="form-group col-lg-6 col-md-12 col-sm-12">
                      <input type="text" name="subject" placeholder="Subject" required/>
                    </div>
                    <div className="form-group col-lg-12">
                      <textarea name="message" placeholder="Write message" required></textarea>
                    </div>
                    <div className="form-group col-lg-12">
                      <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Send a message</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="image-column col-lg-5 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
            <div className="inner-column">
              <div className="image"><img src="images/resource/contact2-1.jpg" alt="Image"/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Contact2
