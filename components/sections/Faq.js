import { useState } from "react";
const Faq2 = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <section className="faqs-section pt-0">
        <div className="icon-circle-lines"></div>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="row">
                  <div className="sec-title">
                    <span className="sub-title">Strategic Growth Solutions</span>
                    <h2>Improve & Enhance Your Business With Us</h2>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <div className="image-box">
                      <figure className="image overlay-anim">
                        <img src="images/resource/faq-1.jpg" alt="" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <div className="exp-box">
                      <div className="count-box">
                        {" "}
                        <span className="count">7+</span>
                        <h4 className="text">
                          Years <br />
                          Experience
                        </h4>
                      </div>
                      <h5 className="title">Empowering Digital Solutions</h5>
                      <div className="text">
                        We specialize in creating powerful web solutions that drive business growth and innovation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <ul className="accordion-box wow fadeInRight">
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 1 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleClick(1)}
                    >
                      Our Mission
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div
                      className={
                        isActive.key == 1
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="content">
                        <div className="text">
                          Our mission is to empower businesses through innovative digital solutions, 
                          fostering growth and success in the ever-evolving technological landscape. 
                          We strive to deliver exceptional value and transform ideas into impactful realities.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block active-block">
                    <div
                      className={
                        isActive.key == 2 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleClick(2)}
                    >
                      Our Objectives
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div
                      className={
                        isActive.key == 2
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="content">
                        <div className="text">
                          We aim to:
                          <ul>
                            <li>✓ Provide cutting-edge tech solutions tailored to each client's needs.</li>
                            <li>✓ Foster long-term partnerships built on trust and mutual success.</li>
                            <li>✓ Continuously innovate and stay ahead of industry trends.</li>
                            <li>✓ Cultivate a culture of excellence & continuous learning within our team.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 3 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleClick(3)}
                    >
                      Our Expertise
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div
                      className={
                        isActive.key == 3
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="content">
                        <div className="text">
                          With over 7 years of experience, we've mastered the art of digital transformation. 
                          Our team of experts excels in web development, mobile applications, cloud solutions, 
                          and cutting-edge technologies like AI and IoT. We've successfully delivered over 500 projects, 
                          driving tangible results for businesses across various industries.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 4 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleClick(4)}
                    >
                      Our Impact
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div
                      className={
                        isActive.key == 4
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="content">
                        <div className="text">
                          Our solutions have helped clients achieve an average of 40% increase in efficiency 
                          and 25% boost in revenue. We've been recognized with multiple industry awards for 
                          our innovative approaches. Our client retention rate of 95% speaks volumes about 
                          the trust and satisfaction we consistently deliver.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Faq2;
