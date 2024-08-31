import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  loop: true,
};
const Banner2 = () => {
  return (
    <>
      <section className="banner-section">
        <div className="icon-car"></div>
        <Swiper
          {...swiperOptions}
          className="banner-carousel owl-carousel owl-theme"
        >
          <SwiperSlide className="slide-item">
            <div
              className="bg-image"
              style={{ backgroundImage: "url(/images/main-slider/3.jpg)" }}
            ></div>
            <div className="auto-container">
              <div className="content-box">
                {" "}
                <span className="sub-title">
                  Solutions for your all it problems
                </span>
                <h1 className="title">
                  Innovative <br />
                  Tech Solution 1
                </h1>
                <div className="btn-box">
                  {" "}
                  <Link
                    href="about"
                    className="theme-btn btn-style-one hover-light"
                  >
                    <span className="btn-title">Discover More</span>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide-item">
            <div
              className="bg-image"
              style={{ backgroundImage: "url(/images/main-slider/2.jpg)" }}
            ></div>
            <div className="auto-container">
              <div className="content-box">
                {" "}
                <span className="sub-title">
                  Solutions for your all it problems
                </span>
                <h1 className="title">
                  Innovative <br />
                  Tech Solution 2
                </h1>
                <div className="btn-box">
                  {" "}
                  <Link
                    href="about"
                    className="theme-btn btn-style-one hover-light"
                  >
                    <span className="btn-title">Discover More</span>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
export default Banner2;
