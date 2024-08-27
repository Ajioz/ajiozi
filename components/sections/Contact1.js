const Contact1 = () => {
  return (
    <>
      <section className="contact-section">
        <div className="anim-icons"> <span className="icon icon-arrow1 bounce-x"></span> <span className="icon icon-arrow2 bounce-y"></span> </div>
        <div className="auto-container">
          <div className="upper-box">
            <div className="inner-box">
              <h4 className="title">Need IT solutions & services consultation?</h4>
              <a href="#" className="theme-btn tel:+92-666-888-0000">+92 666 888 0000</a>
            </div>
          </div>
          <div className="outer-box">
            <div className="bg bg-pattern-4"></div>
            <div className="sec-title dark">
              <span className="sub-title">Get in touch</span>
              <h2>Let’s work together</h2>
            </div>
            <div className="contact-form wow fadeInLeft"> 
              <form method="post" action="get" id="contact-form">
                <div className="row">
                  <div className="form-group col-lg-6 col-md-12 col-sm-12">
                    <input type="text" name="full_name" placeholder="Your name" required/>
                  </div>
                  <div className="form-group col-lg-6 col-md-12 col-sm-12">
                    <input type="email" name="Email" placeholder="Email Address" required/>
                  </div>
                  <div className="form-group col-lg-12">
                    <textarea name="message" placeholder="Write a message" required></textarea>
                  </div>
                  <div className="form-group col-lg-12">
                    <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Discover More</span></button>
                  </div>
                </div>
              </form>
            </div>
            <figure className="image"><img src="images/resource/girl.png" alt=""/></figure>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact1
