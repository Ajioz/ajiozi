import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  navigation: true,
  autoplay: {
    delay: 25000,
    disableOnInteraction: false,
  },
  loop: true
};
const Slider1 = () => {
  return (
    <>
      <section className="main-slider">
        <div className="outer-box">
          <Swiper {...swiperOptions}>
            <SwiperSlide className="slide-item">
              <div
                className="bg bg-image"
                style={{ backgroundImage: "url(/images/main-slider/3.jpg)" }}
              ></div>
              <div className="auto-container content-box">
                <div className="text">Solutions for your all it problems</div>
                <h1 className="title">
                  IT Solutions <br className="d-none d-md-block" />& Services
                </h1>
                <Link
                  href="page-taxi"
                  className="theme-btn btn-style-one dark-line"
                >
                  <span className="btn-title">Learn More</span>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item">
              <div
                className="bg bg-image"
                style={{ backgroundImage: "url(/images/main-slider/2.jpg)" }}
              ></div>
              <div className="auto-container content-box">
                <div className="text">Solutions for your all it problems</div>
                <h1 className="title">
                  IT Solutions <br className="d-none d-md-block" />& Services
                </h1>
                <Link
                  href="page-taxi"
                  className="theme-btn btn-style-one dark-line"
                >
                  <span className="btn-title">Learn More</span>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default Slider1