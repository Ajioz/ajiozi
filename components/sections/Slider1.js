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
  loop: true,
};

const Slider1 = () => {
  return (
    <section className="main-slider">
      <div className="outer-box">
        <Swiper {...swiperOptions}>
          <SwiperSlide className="slide-item">
            <div
              className="bg bg-image"
              style={{ backgroundImage: "url(/images/main-slider/3.jpg)" }}
              role="img"
              aria-label="Empowering Your Business with Ajiozi's IT Solutions"
            ></div>
            <div className="auto-container content-box">
              <div className="text">
                Driving Your Business Forward with Ajiozi's Cutting-Edge IT
                Solutions
              </div>
              <h1 className="title">
                Transforming <br className="d-none d-md-block" /> Your IT
                Experience
              </h1>
              <Link href="about" className="theme-btn btn-style-one dark-line">
                <span className="btn-title">Learn More</span>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <div
              className="bg bg-image"
              style={{ backgroundImage: "url(/images/main-slider/2.jpg)" }}
              role="img"
              aria-label="Empowering Your Business with Ajiozi's IT Solutions"
            ></div>
            <div className="auto-container content-box">
              <div className="text">
                Empowering Your Business with Ajiozi's IT Solutions
              </div>
              <h1 className="title">
                Innovating <br className="d-none d-md-block" /> Your IT
                Landscape
              </h1>
              <Link href="about" className="theme-btn btn-style-one dark-line">
                <span className="btn-title">Learn More</span>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider1;
