import Link from "next/link";
const Process1 = () => {
  return (
    <>
      <section className="process-section pt-0">
        <div className="icon-lines-3 bounce-y"></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Development Process</span>
            <h2>
              Our Software Development <br />
              Life Cycle
            </h2>
          </div>
          <div className="outer-box">
            <div className="row">
              {/* Stage 1: Planning and Analysis */}
              <div className="process-block col-lg-4 col-sm-6 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="about">
                        <img src="images/resource/process-1.jpg" alt="Planning and Analysis" />
                      </Link>
                    </figure>
                    <h4 className="count">01</h4>
                  </div>
                  <div className="content-box">
                    <h4 className="title">
                      <Link href="about">Planning and Analysis</Link>
                    </h4>
                    <div className="text">
                      We define project scope, gather requirements, and conduct thorough business analysis to set a solid foundation.
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 2: Design and Development */}
              <div className="process-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="about">
                        <img src="images/resource/process-2.jpg" alt="Design and Development" />
                      </Link>
                    </figure>
                    <h4 className="count">02</h4>
                  </div>
                  <div className="content-box">
                    <h4 className="title">
                      <Link href="about">Design and Development</Link>
                    </h4>
                    <div className="text">
                      Our team creates system architecture, develops the solution, and performs rigorous testing to ensure quality.
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 3: Deployment and Maintenance */}
              <div className="process-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="about">
                        <img src="images/resource/process-3.jpg" alt="Deployment and Maintenance" />
                      </Link>
                    </figure>
                    <h4 className="count">03</h4>
                  </div>
                  <div className="content-box">
                    <h4 className="title">
                      <Link href="about">Deployment and Maintenance</Link>
                    </h4>
                    <div className="text">
                      We deliver the product, provide user training, and offer ongoing support and maintenance to ensure long-term success.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Process1;
