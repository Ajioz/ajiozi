import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "progressbar",
  },
  loop: true,
  breakpoints: {
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
      slidesPerView: 4,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
  },
};

export default function ProjectGrid() {
  return (
    <>
      <section className="projects-section style-two">
        <div className="icon-lines-4"></div>
        <div className="large-container">
          <div className="carousel-outer">
            <Swiper
              {...swiperOptions}
              className="project-carousel owl-carousel owl-theme"
            >
              <SwiperSlide>
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="project-details">
                          <img
                            src="images/resource/project-1.jpg"
                            alt="Image"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      {" "}
                      <Link href="project-details">
                        <i className="icon fa fa-angle-right"></i>
                      </Link>
                      <div className="text">IT Technology</div>
                      <h4 className="title">
                        <Link href="project-details">
                          Data recovery <br />
                          analysis
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="project-details">
                          <img
                            src="images/resource/project-2.jpg"
                            alt="Image"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      {" "}
                      <Link href="project-details">
                        <i className="icon fa fa-angle-right"></i>
                      </Link>
                      <div className="text">IT Technology</div>
                      <h4 className="title">
                        <Link href="project-details">
                          Data recovery <br />
                          analysis
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="project-details">
                          <img
                            src="images/resource/project-3.jpg"
                            alt="Image"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      {" "}
                      <Link href="project-details">
                        <i className="icon fa fa-angle-right"></i>
                      </Link>
                      <div className="text">IT Technology</div>
                      <h4 className="title">
                        <Link href="project-details">
                          Data recovery <br />
                          analysis
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="project-details">
                          <img
                            src="images/resource/project-4.jpg"
                            alt="Image"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      {" "}
                      <Link href="project-details">
                        <i className="icon fa fa-angle-right"></i>
                      </Link>
                      <div className="text">IT Technology</div>
                      <h4 className="title">
                        <Link href="project-details">
                          Data recovery <br />
                          analysis
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="project-details">
                          <img
                            src="images/resource/project-1.jpg"
                            alt="Image"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      {" "}
                      <Link href="project-details">
                        <i className="icon fa fa-angle-right"></i>
                      </Link>
                      <div className="text">IT Technology</div>
                      <h4 className="title">
                        <Link href="project-details">
                          Data recovery <br />
                          analysis
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="project-details">
                          <img
                            src="images/resource/project-2.jpg"
                            alt="Image"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      {" "}
                      <Link href="project-details">
                        <i className="icon fa fa-angle-right"></i>
                      </Link>
                      <div className="text">IT Technology</div>
                      <h4 className="title">
                        <Link href="project-details">
                          Data recovery <br />
                          analysis
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
