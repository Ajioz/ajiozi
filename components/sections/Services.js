import Link from "next/link";
const Services2 = () => {
  return (
    <>
      <section className="services-section-three">
        <div className="icon-lines-6"></div>
        <div className="auto-container">
          <div className="row">
            <div className="service-info-block col-lg-6 wow fadeInUp">
              <div className="inner-box">
                <div className="sec-title text-gradient mb-5 mb-lg-0">
                  <h2>
                    Elevate Your Business with <br />
                    Future-Ready Solutions
                  </h2>
                  <div className="text">
                    Unlock your company's full potential with our tailored services,
                    designed to drive growth and innovation in today's digital landscape.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="service-block-three col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="inner-box">
                <div className="content-box">
                  <h3 className="count">01</h3>
                  <i className="icon flaticon-digital-services"></i>
                  <h4 className="title">
                    <Link href="service-details">
                      Website <br />
                      Development
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="service-block-three col-lg-3 col-sm-6 wow fadeInUp">
              <div className="inner-box">
                <div className="content-box">
                  <h3 className="count">02</h3>
                  <i className="icon flaticon-graphic-design"></i>
                  <h4 className="title">
                    <Link href="service-details">
                      Graphic <br />
                      Designing
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="service-block-three col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="inner-box">
                <div className="content-box">
                  <h3 className="count">03</h3>
                  <i className="icon flaticon-technology"></i>
                  <h4 className="title">
                    <Link href="service-details">
                      Digital <br />
                      Marketing
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="service-block-three col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="inner-box">
                <div className="content-box">
                  <h3 className="count">04</h3>
                  <i className="icon flaticon-laptop"></i>
                  <h4 className="title">
                    <Link href="service-details">
                      Apps <br />
                      Development
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="service-block-three col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="900ms"
            >
              <div className="inner-box">
                <div className="content-box">
                  <h3 className="count">05</h3>
                  <i className="icon flaticon-recommend"></i>
                  <h4 className="title">
                    <Link href="service-details">
                      UI/UX <br />
                      Designing
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="service-block-three col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="1200ms"
            >
              <div className="inner-box">
                <div className="content-box">
                  <h3 className="count">06</h3>
                  <i className="icon flaticon-promotion"></i>
                  <h4 className="title">
                    <Link href="service-details">
                      SEO & Social <br />
                      Marketing
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services2;
