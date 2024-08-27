import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 1000,
	},
	loop: true,

	breakpoints:{
		320: {
		  slidesPerView: 1,
		  // spaceBetween: 30,
		},
		575: {
		  slidesPerView: 1,
		  // spaceBetween: 30,
		},
		767: {
		  slidesPerView: 2,
		  // spaceBetween: 30,
		},
		991: {
		  slidesPerView: 2,
		  // spaceBetween: 30,
		},
		1199: {
		  slidesPerView: 2,
		  // spaceBetween: 30,
		},
		1350: {
		  slidesPerView: 3,
		  // spaceBetween: 30,
		},
	  }
};
const Testimonial2 = () => {
	return (
	<>
  <section className="testimonial-section-two">
    <div className="icon-lines-2"></div>
    <div className="auto-container">
      <div className="sec-title text-center"> <span className="sub-title">our testimonials</span>
        <h2>What they’re talking about us?</h2>
      </div>
      <div className="carousel-outer"> 
        
        <div className="swiper testimonial-slider-two">
          <div className="swiper-wrapper"> 
            <Swiper {...swiperOptions}>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-block-two">
                    <div className="inner-box">
                      <div className="content-box">
                        <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                        <h4 className="name">David Willims</h4>
                        <span className="designation">Founder of agency</span>
                        <div className="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team</div>
                      </div>
                      <div className="image-box">
                        <figure className="image"><img src="images/resource/testi2-thumb1.jpg" alt="Image"/></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-block-two">
                    <div className="inner-box">
                      <div className="content-box">
                        <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                        <h4 className="name">David Willims</h4>
                        <span className="designation">Founder of agency</span>
                        <div className="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team</div>
                      </div>
                      <div className="image-box">
                        <figure className="image"><img src="images/resource/testi2-thumb2.jpg" alt="Image"/></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-block-two">
                    <div className="inner-box">
                      <div className="content-box">
                        <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                        <h4 className="name">David Willims</h4>
                        <span className="designation">Founder of agency</span>
                        <div className="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team</div>
                      </div>
                      <div className="image-box">
                        <figure className="image"><img src="images/resource/testi2-thumb1.jpg" alt="Image"/></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-block-two">
                    <div className="inner-box">
                      <div className="content-box">
                        <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                        <h4 className="name">David Willims</h4>
                        <span className="designation">Founder of agency</span>
                        <div className="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team</div>
                      </div>
                      <div className="image-box">
                        <figure className="image"><img src="images/resource/testi2-thumb1.jpg" alt="Image"/></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="swiper-pagination styled-pagination"></div>
      </div>
    </div>
  </section>
	</>
	);
};
export default Testimonial2
