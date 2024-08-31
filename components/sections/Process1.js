import Link from "next/link";
const Process1 = () => {
  return (
    <>
      <section className="process-section pt-0">
        <div className="icon-lines-3 bounce-y"></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            {" "}
            <span className="sub-title">Working Process</span>
            <h2>
              Check Our Development <br />
              Process Steps
            </h2>
          </div>
          <div className="outer-box">
            <div className="row">
              <div className="process-block col-lg-4 col-sm-6 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="about">
                        <img src="images/resource/process-1.jpg" alt="Image" />
                      </Link>
                    </figure>
                    <h4 className="count">01</h4>
                  </div>
                  <div className="content-box">
                    <h4 className="title">
                      <Link href="about">Business analysis</Link>
                    </h4>
                    <div className="text">
                      Explain to you how all this mistaken denouncing pleasure
                      and praising pain was born
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="process-block col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="about">
                        <img src="images/resource/process-2.jpg" alt="Image" />
                      </Link>
                    </figure>
                    <h4 className="count">02</h4>
                  </div>
                  <div className="content-box">
                    <h4 className="title">
                      <Link href="about">Implementing & Testing</Link>
                    </h4>
                    <div className="text">
                      Explain to you how all this mistaken denouncing pleasure
                      and praising pain was born
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="process-block col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="about">
                        <img src="images/resource/process-3.jpg" alt="Image" />
                      </Link>
                    </figure>
                    <h4 className="count">03</h4>
                  </div>
                  <div className="content-box">
                    <h4 className="title">
                      <Link href="about">Product Delivery</Link>
                    </h4>
                    <div className="text">
                      Explain to you how all this mistaken denouncing pleasure
                      and praising pain was born
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
