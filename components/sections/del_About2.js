import Link from "next/link";
const About2 = () => {
  return (
    <>
      <section className="about-section-two">
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div
                className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight"
                data-wow-delay="600ms"
              >
                <div className="inner-column">
                  <div className="sec-title">
                    {" "}
                    <span className="sub-title">about the company</span>
                    <h2>
                      Expert of software & <br />
                      tech programing
                    </h2>
                    <div className="text">
                      Web designing in a powerful way of just not an only
                      professions, however, in a passion for our Company. We
                      have to a tendency to believe the idea that smart looking
                      of any website is the first impression on visitors.
                    </div>
                  </div>
                  <ul className="list-style-two two-col">
                    <li>
                      <i className="icon fa fa-check-circle"></i>Maecenas
                      pulvinar ligula
                    </li>
                    <li>
                      <i className="icon fa fa-check-circle"></i>Non proin netus
                      natoque
                    </li>
                    <li>
                      <i className="icon fa fa-check-circle"></i>Porta hinteger
                      neque
                    </li>
                    <li>
                      <i className="icon fa fa-check-circle"></i>Porta hinteger
                      neque
                    </li>
                  </ul>
                  <div className="bottom-box">
                    <div className="author-box">
                      <figure className="image">
                        <img
                          src="images/resource/about2-thumb.jpg"
                          alt="Image"
                        />
                      </figure>
                      <div className="info">
                        <h4 className="name">Aleesha brown</h4>
                        <div className="designation">CEO & CO Founder</div>
                      </div>
                    </div>
                    <Link href="about" className="theme-btn btn-style-one">
                      <span className="btn-title">Discover more</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="image-box">
                    <figure className="image overlay-anim wow fadeInRight">
                      <img src="images/resource/about-3.png" alt="Image" />
                    </figure>
                    <div className="icon-dots-3"></div>
                    <div className="circle-text">
                      {" "}
                      <img src="images/icons/icon-circle-text.png" alt="" />
                      <h2 className="word">IT</h2>
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
export default About2;
