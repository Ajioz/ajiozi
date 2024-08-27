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
	breakpoints:{
		320: {
		  slidesPerView: 1,
		},
		575: {
		  slidesPerView: 1,
		},
		767: {
		  slidesPerView: 2,
		}
  }
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
              <div className="sec-title"> <span className="sub-title">our testimonials</span>
                <h2>What they’re talking about us?</h2>
                <div className="text">Sed ut perspiciatis unde omnis natus error sit <br/>voluptatem accusa ntium doloremque laudantium <br/>totam rem aperiamea queipsa.</div>
              </div>
              <div className="info-box">
                <ul className="feature-list">
                  <li><i className="icon fal fa-circle-check"></i>Pellentes gravida lectus.</li>
                  <li><i className="icon fal fa-circle-check"></i>Finibus aliquet ultrices.</li>
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
                          <figure className="thumb"><img src="images/resource/testi1-thumb1.jpg" alt="Image"/></figure>
                          <figure className="image-2"><img src="images/icons/quote-icon.png" alt=""/></figure>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="info-box">
                            <h4 className="name">David Willims</h4>
                            <span className="designation">Founder of agency</span>
                          </div>
                          <div className="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team with some of my end  of the day leaning on Transida.</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-block mb-0">
                      <div className="inner-box">
                        <div className="content-box">
                          <figure className="thumb"><img src="images/resource/testi1-thumb2.jpg" alt="Image"/></figure>
                          <figure className="image-2"><img src="images/icons/quote-icon.png" alt=""/></figure>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="info-box">
                            <h4 className="name">David Willims</h4>
                            <span className="designation">Founder of agency</span>
                          </div>
                          <div className="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team with some of my end  of the day leaning on Transida.</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-block mb-0">
                      <div className="inner-box">
                        <div className="content-box">
                          <figure className="thumb"><img src="images/resource/testi1-thumb1.jpg" alt="Image"/></figure>
                          <figure className="image-2"><img src="images/icons/quote-icon.png" alt=""/></figure>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="info-box">
                            <h4 className="name">David Willims</h4>
                            <span className="designation">Founder of agency</span>
                          </div>
                          <div className="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team with some of my end  of the day leaning on Transida.</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-block mb-0">
                      <div className="inner-box">
                        <div className="content-box">
                          <figure className="thumb"><img src="images/resource/testi1-thumb1.jpg" alt="Image"/></figure>
                          <figure className="image-2"><img src="images/icons/quote-icon.png" alt=""/></figure>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="info-box">
                            <h4 className="name">David Willims</h4>
                            <span className="designation">Founder of agency</span>
                          </div>
                          <div className="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team with some of my end  of the day leaning on Transida.</div>
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
export default Testimonial1
