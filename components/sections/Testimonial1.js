import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Navigation, Pagination],
  slidesPerView: 2,
  spaceBetween: 0,
  direction: "vertical",
  autoplay: {
    delay: 100000,
  },
  loop: true,
  navigation: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
  },
};
const Testimonial1 = () => {
  return (
    <>
      <section className="testimonial-section">
        <div className="bg bg-pattern-12"></div>
        <div className="auto-container">
          <div className="row">
            <div className="title-column col-lg-5">
              <div className="inner-column">
                <div className="sec-title">
                  {" "}
                  <span className="sub-title">our testimonials</span>
                  <h2>What our clients say about us</h2>
                  <div className="text">
                    We are committed to providing our clients with exceptional
                    service while offering our employees the best training.
                  </div>
                </div>
                <div className="info-box">
                  <ul className="feature-list">
                    <li>
                      <i className="icon fal fa-circle-check"></i>Professional
                      and reliable service.
                    </li>
                    <li>
                      <i className="icon fal fa-circle-check"></i>Customer
                      satisfaction is our priority.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="testimonial-column col-lg-7">
              <div className="inner-column">
                <div className="swiper-container testimonial-slider">
                  <Swiper {...swiperOptions}>
                    <SwiperSlide>
                      <div className="testimonial-block mb-0">
                        <div className="inner-box">
                          <div className="content-box">
                            <figure className="thumb">
                              <img
                                src="images/resource/testi1-thumb1.jpg"
                                alt="Image"
                              />
                            </figure>
                            <figure className="image-2">
                              <img src="images/icons/quote-icon.png" alt="" />
                            </figure>
                            <div className="rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <div className="info-box">
                              <h4 className="name">David Williams</h4>
                              <span className="designation">
                                Founder of Agency
                              </span>
                            </div>
                            <div className="text">
                              Ajiozi has been a game-changer for our business.
                              Their team is professional, reliable, and always
                              goes the extra mile to ensure our needs are met.
                              Highly recommended!
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial-block mb-0">
                        <div className="inner-box">
                          <div className="content-box">
                            <figure className="thumb">
                              <img
                                src="images/resource/testi1-thumb2.jpg"
                                alt="Image"
                              />
                            </figure>
                            <figure className="image-2">
                              <img src="images/icons/quote-icon.png" alt="" />
                            </figure>
                            <div className="rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <div className="info-box">
                              <h4 className="name">Michael Brown</h4>
                              <span className="designation">
                                Managing Director
                              </span>
                            </div>
                            <div className="text">
                              The team at Ajiozi is exceptional. Their expertise
                              and dedication have helped us streamline our
                              operations and improve our overall efficiency. We
                              couldn't be happier with their service.
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial-block mb-0">
                        <div className="inner-box">
                          <div className="content-box">
                            <figure className="thumb">
                              <img
                                src="images/resource/testi2-thumb1.jpg"
                                alt="Image"
                              />
                            </figure>
                            <figure className="image-2">
                              <img src="images/icons/quote-icon.png" alt="" />
                            </figure>
                            <div className="rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <div className="info-box">
                              <h4 className="name">Sarah Johnson</h4>
                              <span className="designation">
                                CEO of Tech Solutions
                              </span>
                            </div>
                            <div className="text">
                              Working with Ajiozi has been a pleasure. Their
                              attention to detail and commitment to customer
                              satisfaction is unparalleled. We look forward to
                              continuing our partnership.
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                      <div className="testimonial-block mb-0">
                        <div className="inner-box">
                          <div className="content-box">
                            <figure className="thumb">
                              <img
                                src="images/resource/testi2-thumb2.jpg"
                                alt="Image"
                              />
                            </figure>
                            <figure className="image-2">
                              <img src="images/icons/quote-icon.png" alt="" />
                            </figure>
                            <div className="rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <div className="info-box">
                              <h4 className="name">Emily Davis</h4>
                              <span className="designation">
                                Operations Manager
                              </span>
                            </div>
                            <div className="text">
                              Ajiozi has exceeded our expectations in every way.
                              Their team is knowledgeable, responsive, and
                              always willing to go the extra mile to ensure our
                              satisfaction. We highly recommend their services.
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonial1;
